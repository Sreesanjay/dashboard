import { styled } from "styled-components";

export const SearchInput = styled.input.attrs({
    type: 'text',
})`
    max-width: 110px;
    text-indent: 5px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid white;
    outline: none;

    @media(max-width: 810px){
        max-width: 100px;
    }
`