import { useState } from "react";
import { dark, light, defaultStyles } from "../styles/Theme.styled";

const useTheme = () => {
     const [selectedTheme, setSelectedTheme] = useState({
          ...defaultStyles,
          ...light,
     });
     function toggleTheme(newTheme: string) {
          if (newTheme === "light") {
               setSelectedTheme({ ...defaultStyles, ...light });
          } else {
               setSelectedTheme({ ...defaultStyles, ...dark });
          }
     }
     return { selectedTheme, toggleTheme };
};

export default useTheme;
