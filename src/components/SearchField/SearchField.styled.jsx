import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';

export const Search = styled.form`
    position: absolute;
    top: 152px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    background-color: ${(prop) => prop.theme.header}
    @media screen and (min-width: 320px) {
        top: 170px;
    }
    @media screen and (min-width: 768px) {
        top: 100px;
    }
    
    @media screen and (min-width: 1280px) {
        top: 90px;
    }
`

export const SearchIcon = styled(BsSearch)`
    position: absolute;
    right: 7px;
    top: 3px;
    @media screen and (min-width: 768px) {
        right: 7px;
        top: 4px;
    }
    
    @media screen and (min-width: 1280px) {
        right: 7px;
        top: 5px;
    }
`

export const Input = styled.input`
    
    width: 250px;
    padding: 10px;
    padding-right: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 1px;
    @media screen and (min-width: 320px) {
        height: 15px;
    }
    @media screen and (min-width: 768px) {
        height: 15px;
    }
    
    @media screen and (min-width: 1280px) {
        
    }
`