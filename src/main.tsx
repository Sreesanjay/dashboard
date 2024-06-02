import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/Global.ts";
import App from "./App.tsx";
import "./index.css";
import Theme from "./providers/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
     <React.StrictMode>
          <Theme>
               <GlobalStyles />
               <App />
          </Theme>
     </React.StrictMode>
);
