import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/Global.ts";
import App from "./App.tsx";
import "./index.css";
import { defaultStyles } from "./styles/Theme.styled.ts";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
     <React.StrictMode>
          <ThemeProvider theme={defaultStyles}>
               <GlobalStyles />
               <App />
          </ThemeProvider>
     </React.StrictMode>
);
