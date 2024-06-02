import styled from "styled-components";

export const RowSelector = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    select {
        width: 50px;
        height: 30px;
        border:1px solid rgba(190, 192, 196, 0.8);
        border-radius: 5px;
        outline: none;
    }

    span{
        font-size: ${({ theme }) => theme.fonts.f5};
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`