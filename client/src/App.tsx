/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import inititalData from "./constants/student";
import { IStudent } from "./types";

// eslint-disable-next-line react-refresh/only-export-components
export const studentContext = createContext({
     studentData: inititalData,
     createStudent: (_studentData: IStudent) => {},
     updateStudent: (_studentData: IStudent) => {},
     deleteStudent: (_id: string) => {},
});

const App = () => {
     const [studentData, setStudentDataState] = useState(inititalData);

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
          <>
               <studentContext.Provider
                    value={{
                         studentData,
                         updateStudent,
                         createStudent,
                         deleteStudent,
                    }}
               >
                    <Navbar />
                    <StudentList />
               </studentContext.Provider>
          </>
     );
};

export default App;
