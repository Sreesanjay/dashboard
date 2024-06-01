import { Container } from "../styles/Container.styled";
import {
     Table,
     TableHeader,
     TableRow,
     TableHead,
     TableBody,
     TableData,
} from "../styles/table.styled";

import studentData from "../constants/student";
import { IStudent } from "../types";
import { TableButton } from "../styles/Button.styled";
import { PageHeading } from "../styles/Header.styled";
import { RowSelector } from "../styles/StudentList";
import { SearchInput } from "../styles/Input.styled";

const StudentList = () => {

     function handleChange(e) {
          console.log(e.target.value);
     }



     return (
          <Container>
               <header>
                    <PageHeading>Student List</PageHeading>
                    <>
                         <RowSelector>
                              <select name="" id="">
                                   <option value="10">10</option>
                                   <option value="25">25</option>
                                   <option value="50">50</option>
                                   <option value="100">100</option>
                              </select>
                              <span>Entries Per Page</span>
                         </RowSelector>
                    </>
               </header>

               <Table>
                    <TableHeader>
                         <TableRow>
                              <TableHead>ID</TableHead>
                              <TableHead>Name</TableHead>
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
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="email"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput
                                        name="phone"
                                        onChange={handleChange}
                                   />
                              </TableHead>
                              <TableHead>
                                   <SearchInput name="place" />
                              </TableHead>
                              <TableHead></TableHead>
                         </TableRow>
                    </TableHeader>
                    <TableBody>
                         {studentData.map((student: IStudent) => {
                              return (
                                   <TableRow>
                                        <TableData dataTitle={"ID"}>
                                             {student.id}
                                        </TableData>
                                        <TableData dataTitle={"Name"}>
                                             {student.name}
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
                                             <TableButton>Delete</TableButton>
                                             <TableButton>Edit</TableButton>
                                        </TableData>
                                   </TableRow>
                              );
                         })}
                    </TableBody>
               </Table>
          </Container>
     );
};

export default StudentList;
