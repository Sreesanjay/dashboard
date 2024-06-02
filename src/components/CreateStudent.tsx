import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ButtonGroup, FormButton } from "../styles/Button.styled";
import { FormGroup } from "../styles/Form.styled";
import Input from "./Input";
import validateForm from "../services/validateForm";
import { IForm } from "../types";
import { studentContext } from "../providers/studentProvider";

const CreateStudent = ({ handleClose }: { handleClose: () => void }) => {
     const { createStudent } = useContext(studentContext);
     const [error, setError] = useState<IForm>({
          name: "",
          age: "",
          place: "",
          email: "",
          phone: "",
     });
     const [formData, setFormData] = useState<IForm>({
          name: "",
          age: "",
          place: "",
          email: "",
          phone: "",
     });

     const [isFormSubmit, setIsFormSubmit] = useState<boolean>(false);

     function handleChange(e: ChangeEvent<HTMLInputElement>) {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
          setError({
               ...error,
               [name]: validateForm(name, value),
          });
     }
     function handleSubmit() {
          const err: IForm = {
               name: "",
               age: "",
               place: "",
               email: "",
               phone: "",
          };
          for (const key of Object.keys(formData)) {
               const errMessage = validateForm(key, formData[key]);
               err[key] = errMessage;
          }
          setError(err);
          setIsFormSubmit(true);
     }

     useEffect(() => {
          if (isFormSubmit) {
               const isValidate = Object.keys(error).every((key) => {
                    if (error[key] == "") return true;
                    else return false;
               });
               if (isValidate) {
                    createStudent(formData);
                    handleClose();
               }
               setIsFormSubmit(false);
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [isFormSubmit]);

     function cancelForm() {
          setFormData({
               name: "",
               age: "",
               place: "",
               email: "",
               phone: "",
          });
          handleClose();
     }
     return (
          <form action="">
               <FormGroup>
                    <Input
                         type={"text"}
                         name={"name"}
                         label={"Name"}
                         error={error.name}
                         value={formData.name}
                         handleChange={handleChange}
                    ></Input>
                    <Input
                         type={"email"}
                         error={error.email}
                         name={"email"}
                         label={"Email"}
                         value={formData.email}
                         handleChange={handleChange}
                    ></Input>
               </FormGroup>
               <FormGroup>
                    <Input
                         type={"text"}
                         name={"age"}
                         error={error.age}
                         label={"Age"}
                         value={formData.age}
                         handleChange={handleChange}
                    ></Input>
                    <Input
                         type={"text"}
                         name={"phone"}
                         error={error.phone}
                         label={"Phone"}
                         value={formData.phone}
                         handleChange={handleChange}
                    ></Input>
               </FormGroup>
               <FormGroup>
                    <Input
                         type={"text"}
                         name={"place"}
                         error={error.place}
                         label={"Place"}
                         value={formData.place}
                         handleChange={handleChange}
                    ></Input>
               </FormGroup>

               <ButtonGroup>
                    <FormButton
                         type="button"
                         background={"red"}
                         onClick={() => {
                              cancelForm();
                         }}
                    >
                         Cancel
                    </FormButton>
                    <FormButton type="button" onClick={handleSubmit}>
                         Submit
                    </FormButton>
               </ButtonGroup>
          </form>
     );
};

export default CreateStudent;
