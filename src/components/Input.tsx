import { ChangeEvent } from "react";
import { FormControl } from "../styles/Form.styled";

const Input = ({
     label,
     name,
     type,
     error,
     value,
     handleChange,
}: {
     label: string;
     error: string;
     name: string;
     type: string;
     value: string;
     handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
     return (
          <FormControl>
               <label>{label}</label>
               {error && <small>{error}</small>}
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
