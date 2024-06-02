import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import StudentProvider from "./providers/studentProvider";

const App = () => {
     return (
          <>
               <StudentProvider>
                    <Navbar />
                    <StudentList />
               </StudentProvider>
          </>
     );
};

export default App;
