import styled from "styled-components";

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input{
        height: 35px;
        border-radius: 5px;
        outline: none;
        border:1px solid rgba(190, 192, 196, 0.8);
        text-indent: 10px;
    }
`

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 15px;
    margin-bottom: 15px;

    @media(max-width: 765px){
        flex-direction: column;
    }

`