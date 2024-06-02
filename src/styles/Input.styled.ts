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

export const LargeSearchBox = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 5px;

    select{
        border: none;
        outline: none;
    }
    @media(min-width: 760px){
        display: none;
    }

    input{
        flex-grow: 1;
        text-indent: 5px;
        height: 35px;
        border-radius: 5px;
        border: 1px solid white;
        outline: none;
    }
`