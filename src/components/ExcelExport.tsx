import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { IStudent } from "../types";
import { LargeButton } from "../styles/Button.styled";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import hotkeys from "hotkeys-js";

const ExcelExport = ({
     data,
     fileName,
}: {
     data: IStudent[];
     fileName: string;
}) => {
     const exportToExcel = () => {
          const worksheet = XLSX.utils.json_to_sheet(data);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
          const excelBuffer = XLSX.write(workbook, {
               bookType: "xlsx",
               type: "array",
          });
          const blob = new Blob([excelBuffer], {
               type: "application/octet-stream",
          });
          saveAs(blob, `${fileName}.xlsx`);
     };

     //keyboard accessibility for download data
     hotkeys("ctrl+d", function (event) {
          // Prevent the default refresh event under WINDOWS system
          event.preventDefault();
          exportToExcel();
     });

     return (
          <LargeButton onClick={exportToExcel}>
               <SimCardDownloadIcon />
               Export to Excel
          </LargeButton>
     );
};

export default ExcelExport;
