import { useState } from "react";
import { LargeButton } from "../styles/Button.styled";
import { StyledHeader } from "../styles/Header.styled";
import StudentModal from "./Modal";

const Navbar = () => {
     const [openModal, setOpenModal] = useState(false);

     function handleOpenModal() {
          setOpenModal(true);
     }

     return (
          <>
               <StyledHeader>
                    <h1>Dashbord</h1>
                    <LargeButton onClick={handleOpenModal}>
                         New Student
                    </LargeButton>
               </StyledHeader>
               <StudentModal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    type={'CREATE'}
               />
          </>
     );
};

export default Navbar;
