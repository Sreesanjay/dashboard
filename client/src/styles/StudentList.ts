import styled from "styled-components";

export const RowSelector = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    select {
        width: 50px;
        height: 30px;
        border-radius: 5px;
        outline: none;
    }

    span{
        font-size: ${({ theme }) => theme.fonts.f5};
    }
`