import styled from "styled-components";

export const ModalBody = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor || '#F2F2F2'};
    width: 50vw;
    height: auto;
    padding: 10px 30px;

    @media(max-width: 765px){
        width: 90vw;
    }
`
export const ConfirmModalBody = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor || '#F2F2F2'};
    width: 100%;
    height: 20vh;
    padding: 10px 30px;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    div{
        display: flex;
        gap: 10px;
    }

    @media(max-width: 765px){
        width: 90vw;
    }

    
`

export const ModalStyle = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
}