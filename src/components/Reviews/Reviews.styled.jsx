import styled from "styled-components";

export const ReviewsWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
    margin-bottom: 40px;
`

export const ReviewCard = styled.li`
    width: 380px;
     @media screen and (min-width: 768px) {
        justify-content: space-between;
        width: 350px;
     }
`

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Author = styled.p`
    margin-left: 10px;
`

export const Content = styled.p`
    margin-top: 10px;
`