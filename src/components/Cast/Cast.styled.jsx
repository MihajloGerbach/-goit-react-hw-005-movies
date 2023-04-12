import styled from "styled-components";

export const CastWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;  
    margin-top: 40px;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
     }
     @media screen and (min-width: 768px) {
        justify-content: center;;
     }
`

export const CastItem = styled.li`
    width: 230px;
    @media screen and (min-width: 320px) {
        width: 320px;
     }
     @media screen and (min-width: 768px) {
        width: 350px;
     }
     @media screen and (min-width: 1280px) {
        width: 230px;
     }
`

export const Img = styled.img`
    border-radius: 5px;
`

export const Name = styled.p`
    margin-top: 10px;
`

export const Character = styled.p`
    margin-top: 5px;
    margin-bottom: 15px;
`