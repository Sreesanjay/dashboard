import { KeyLabel } from "../styles/KeyLabel";

const KeyLabels = () => {
     return (
          <KeyLabel>
               <table cellSpacing={15}>
                    <tr>
                         <td>New Student :</td>
                         <td>n</td>
                         <td>Delete :</td>
                         <td>Del</td>
                    </tr>
                    <tr>
                         <td>Download :</td>
                         <td>Ctrl + d</td>
                         <td>Edit :</td>
                         <td>Ctrl + e</td>
                    </tr>
               </table>
          </KeyLabel>
     );
};

export default KeyLabels;
