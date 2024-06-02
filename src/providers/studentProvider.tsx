/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, ReactNode, useState } from "react";
import initialData from "../constants/student";
import { IStudent } from "../types";

// eslint-disable-next-line react-refresh/only-export-components
export const studentContext = createContext({
     studentData: initialData,
     createStudent: (_studentData: IStudent) => {},
     updateStudent: (_studentData: IStudent) => {},
     deleteStudent: (_id: string) => {},
});

const StudentProvider = ({ children }: { children: ReactNode }) => {
     const [studentData, setStudentDataState] = useState(initialData);

     const updateStudent = (updatedStudent: IStudent) => {
          const updatedStudentData = studentData.map((student) =>
               student.id === updatedStudent.id ? updatedStudent : student
          );

          console.log(updatedStudentData);
          setStudentDataState(updatedStudentData);
     };

     const createStudent = (newStudent: IStudent) => {
          const id =
               parseInt(studentData[studentData.length - 1].id as string) + 1;
          newStudent.id = id.toString();

          setStudentDataState([...studentData, newStudent]);
     };

     const deleteStudent = (id: string) => {
          const newData = studentData.filter((item) => item.id !== id);
          setStudentDataState(newData);
     };
     return (
          <studentContext.Provider
               value={{
                    studentData,
                    updateStudent,
                    createStudent,
                    deleteStudent,
               }}
          >
               {children}
          </studentContext.Provider>
     );
};

export default StudentProvider;
