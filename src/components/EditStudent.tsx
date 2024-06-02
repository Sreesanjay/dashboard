import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ButtonGroup, FormButton } from "../styles/Button.styled";
import { FormGroup } from "../styles/Form.styled";
import Input from "./Input";
import { IForm } from "../types";
import validateForm from "../services/validateForm";
import { studentContext } from "../providers/studentProvider";

const EditStudent = ({
     handleClose,
     id,
}: {
     handleClose: () => void;
     id: string;
}) => {
     const { studentData, updateStudent } = useContext(studentContext);

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

     useEffect(() => {
          const student = studentData.find((item) => item.id === id);
          if (student && id) {
               setFormData({
                    name: student.name,
                    age: student.age,
                    place: student.place,
                    email: student.email,
                    phone: student.phone,
               });
          }
     }, [studentData, id]);

     function handleChange(e: ChangeEvent<HTMLInputElement>) {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
          setError({
               ...error,
               [name]: validateForm(name, value),
          });
     }

     function handleSubmit() {
          const isValidate = Object.keys(error).every((key) => {
               if (error[key] == "") return true;
               else return false;
          });
          if (isValidate) {
               updateStudent({ id, ...formData });
               handleClose();
          }
     }

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
                         error={error.name}
                         name={"name"}
                         label={"Name"}
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
                         error={error.age}
                         name={"age"}
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

export default EditStudent;
