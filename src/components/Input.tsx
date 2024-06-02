import { ChangeEvent } from "react";
import { FormControl } from "../styles/Form.styled";

const Input = ({
     label,
     name,
     type,
     value,
     handleChange,
}: {
     label: string;
     name: string;
     type: string;
     value: string;
     handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
     return (
          <FormControl>
               <label>{label}</label>
               <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
               />
          </FormControl>
     );
};

export default Input;
