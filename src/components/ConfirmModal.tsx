import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Dispatch, SetStateAction } from "react";
import { ConfirmModalBody, ModalStyle } from "../styles/Modal.styled";
import { FormButton } from "../styles/Button.styled";

const ConfirmModal = ({
     openModal,
     setOpenModal,
     text,
     handleOutput,
}: {
     openModal: boolean;
     setOpenModal: Dispatch<SetStateAction<boolean>>;
     text: string;
     handleOutput: (arg: boolean) => void;
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
                    <ConfirmModalBody>
                         <h3>{text}</h3>
                         <div>
                              <FormButton
                                   background="red"
                                   onClick={() => handleOutput(false)}
                              >
                                   Cancel
                              </FormButton>

                              <FormButton onClick={() => handleOutput(true)}>
                                   Confirm
                              </FormButton>
                         </div>
                    </ConfirmModalBody>
               </Box>
          </Modal>
     );
};

export default ConfirmModal;
