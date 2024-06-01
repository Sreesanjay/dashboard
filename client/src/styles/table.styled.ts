import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid rgba(190, 192, 196, 0.5);
    margin-top: 20px;

    @media(max-width: 700px){
        border: 2px solid rgb(${({ theme }) => theme.accent});
    }
`

export const TableHeader = styled.thead`
    tr{
        background-color: rgb(${({ theme }) => theme.accent});
    }

    @media(max-width: 700px){
       tr{
        display: none;
       }
    }
`
export const TableBody = styled.tbody`
    tr:hover{
        background-color: #c1c2c7 !important;
    }
    
    tr:nth-child(even){
        background-color:#e1e2e6;
    }

    @media(max-width: 700px){
        tr:hover{
            background-color: ${({ theme }) => theme.backgroundColor} !important;
        }
        tr:nth-child(even){
            background-color: rgba(${({ theme }) => theme.accent}, 0.5) !important;
        }
    }
`

export const TableRow = styled.tr`
    padding: .45em;

    @media(max-width: 700px){
        display: block;
    }
`

export const TableHead = styled.th`
    color: white;
    font-size: 1.15em;
    padding: 10px;
    text-align: center; 
`

export const TableData = styled.td<{ dataTitle: string }>`
    font-size: 1em;
    padding: 10px;
    text-align: center; 
    height; auto;
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-width: 100px;
    hyphens: auto;
    white-space: normal !important;

    @media(max-width: 700px){
        text-align: right;
        display: block;
        max-width: 100%;

        &::before {
           content: "${props => props.dataTitle}";
           float: left; 
          }
    }
   
`

