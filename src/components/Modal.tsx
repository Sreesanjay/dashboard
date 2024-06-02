import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";
import { ModalBody, ModalStyle } from "../styles/Modal.styled";
import { PageHeading } from "../styles/Header.styled";
import CreateStudent from "./CreateStudent";
import EditStudent from "./EditStudent";

const StudentModal = ({
     openModal,
     setOpenModal,
     type,
     id,
}: {
     openModal: boolean;
     setOpenModal: Dispatch<SetStateAction<boolean>>;
     type: string;
     id?: string;
}) => {
     function handleClose() {
          setOpenModal(false);
     }
     return (
          <Modal
               open={openModal}
               onClose={handleClose}
               aria-labelledby="modal-modal-title"
               aria-describedby="modal-modal-description"
          >
               <Box sx={ModalStyle}>
                    <ModalBody>
                         {type === "CREATE" ? (
                              <>
                                   <PageHeading>New Student</PageHeading>
                                   <CreateStudent handleClose={handleClose} />
                              </>
                         ) : (
                              <>
                                   <PageHeading>Edit Student</PageHeading>
                                   <EditStudent
                                        handleClose={handleClose}
                                        id={id as string}
                                   />
                              </>
                         )}
                    </ModalBody>
               </Box>
          </Modal>
     );
};

export default StudentModal;
