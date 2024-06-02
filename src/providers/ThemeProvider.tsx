import { useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "../hooks/useTheme";

const Theme = ({ children }: { children: ReactNode }) => {
     const { selectedTheme, toggleTheme } = useTheme();
     useEffect(() => {
          const currentTheme = JSON.parse(
               localStorage.getItem("current-theme") as string
          );
          if (currentTheme) {
               toggleTheme(currentTheme);
          }
     }, [toggleTheme]);

     return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default Theme;
