import { Container } from "../styles/Container.styled";
import Pagination from "@mui/material/Pagination";
import {
     Table,
     TableHeader,
     TableRow,
     TableHead,
     TableBody,
     TableData,
     TableFooter,
} from "../styles/table.styled";

import { IFilter, IStudent } from "../types";
import { TableButton } from "../styles/Button.styled";
import { PageHeading } from "../styles/Header.styled";
import { Row, RowSelector } from "../styles/StudentList";
import { SearchInput } from "../styles/Input.styled";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { getStudentList } from "../services/student";
import { studentContext } from "../App";
import StudentModal from "./Modal";
import ConfirmModal from "./ConfirmModal";
import ExcelExport from "./ExcelExport";

const StudentList = () => {
     const { studentData, deleteStudent } = useContext(studentContext);

     const [filteredList, setFilteredList] = useState<IStudent[] | []>([]);
     const [page, setPage] = useState(1);
     const [entries, setEntries] = useState(10);
     const [filter, setFilter] = useState<IFilter>({
          id: "",
          name: "",
          age: "",
          email: "",
          phone: "",
          place: "",
     });
     const [editStudentId, seteditStudentId] = useState<null | string>(null);
     const [openEditModal, setOpenEditModal] = useState(false);
     const [deleteStudentId, setDeleteStudentId] = useState<null | string>(
          null
     );
     const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

     function confirmDelete(state: boolean) {
          if (state) {
               deleteStudent(deleteStudentId as string);
               setDeleteStudentId(null);
          }
          setOpenConfirmDelete(false);
     }

     /**
      * delete student
      * @param id String
      */
     function handleDelete(id: string) {
          setOpenConfirmDelete(true);
          setDeleteStudentId(id);
     }

     /**
      * method for updating search data
      * @param e
      */
     function handleChange(e: ChangeEvent<HTMLInputElement>) {
          const { name, value } = e.target;
          setFilter({ ...filter, [name]: value });
     }

     useEffect(() => {
          const data = getStudentList(page, entries, filter, studentData);
          setFilteredList(data);
     }, [filter, page, entries, studentData]);

     const handleChangePage = (
          event: React.ChangeEvent<unknown>,
          value: number
     ) => {
          event.preventDefault();
          setPage(value);
     };

     /**
      * method for changing number of rows per page
      * @param e
      */
     const handleChangeRowsPerPage = (e: ChangeEvent<HTMLSelectElement>) => {
          setEntries(parseInt(e.target.value, 10));
          setPage(1);
     };

     /**
      * function for opening edit modal
      * @param id
      */
     function handleEditStudent(id: string) {
          seteditStudentId(id);
          setOpenEditModal(true);
     }

     useEffect(() => {
          if (!openEditModal) {
               seteditStudentId(null);
          }
     }, [openEditModal]);

     return (
          <Container>
               <header>
                    <PageHeading>Student List</PageHeading>
                    <Row>
                         <RowSelector>
                              <select
                                   defaultValue={10}
                                   onChange={handleChangeRowsPerPage}
                              >
                                   <option value="10">10</option>
                                   <option value="25">25</option>
                                   <option value="50">50</option>
                                   <option value="100">100</option>
                              </select>
                              <span>Entries Per Page</span>
                         </RowSelector>
                         <ExcelExport
                              data={filteredList}
                              fileName={"studentdata"}
                         />
                    </Row>
               </header>

               <Table>
                    <TableHeader>
                         <TableRow>
                              <TableHead>ID</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Age</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Phone</TableHead>
                              <TableHead>Place</TableHead>
                              <TableHead>Manage</TableHead>
                         </TableRow>
                         <TableRow>
                              <TableHead></TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="name"
                                        placeholder="Search"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="age"
                                        placeholder="Search"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="email"
                                        placeholder="Search"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="phone"
                                        placeholder="Search"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="place"
                                        placeholder="Search"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead></TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {filteredList.map((student: IStudent) => {
                              return (
                                   <TableRow>
                                        <TableData dataTitle={"ID"}>
                                             {student.id}
                                        </TableData>
                                        <TableData dataTitle={"Name"}>
                                             {student.name}
                                        </TableData>
                                        <TableData dataTitle={"Age"}>
                                             {student.age}
                                        </TableData>
                                        <TableData dataTitle={"Email"}>
                                             {student.email}
                                        </TableData>
                                        <TableData dataTitle={"Phone"}>
                                             {student.phone}
                                        </TableData>
                                        <TableData dataTitle={"Place"}>
                                             {student.place}
                                        </TableData>
                                        <TableData dataTitle={"manage"}>
                                             <TableButton
                                                  onClick={() =>
                                                       handleDelete(
                                                            student.id as string
                                                       )
                                                  }
                                             >
                                                  Delete
                                             </TableButton>
                                             <TableButton
                                                  onClick={() =>
                                                       handleEditStudent(
                                                            student.id as string
                                                       )
                                                  }
                                             >
                                                  Edit
                                             </TableButton>
                                        </TableData>
                                   </TableRow>
                              );
                         })}
                    </TableBody>
               </Table>
               <TableFooter>
                    <Pagination
                         count={Math.ceil(studentData.length / entries)}
                         page={page}
                         onChange={handleChangePage}
                    />
               </TableFooter>
               <StudentModal
                    openModal={openEditModal}
                    setOpenModal={setOpenEditModal}
                    type={"EDIT"}
                    id={editStudentId as string}
               />
               <ConfirmModal
                    openModal={openConfirmDelete}
                    setOpenModal={setOpenConfirmDelete}
                    text={"Are you sure, You want to delete this student"}
                    handleOutput={confirmDelete}
               />
          </Container>
     );
};

export default StudentList;
