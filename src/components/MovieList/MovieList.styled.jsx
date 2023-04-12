import styled from "styled-components";

export const MoviesWrapper = styled.ul`
    margin-top: 40px;
    margin-bottom 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    gap: 25px;
`
export const MovieCard = styled.li`
    position: relative;
    border: 2px solid ${(prop)=> prop.theme.accent};
    border-radius: 10px;
    overflow: hidden;
    transition: transform 250ms ease-in-out;
    &:hover,
    &:focus {
        transform: scale(1.03);
        box-shadow: -1px 8px 66px 6px rgba(115,149,174,0.76);
    }
`
export const DescrWrapper = styled.div`
    padding: 10px;
`
export const Title = styled.h2`
    font-size: 22px;
`
export const Img = styled.img`
    object-fit: cover;
    object-position: left top;
    width: 100%;
    height: 400px;
`
export const VoteAverege = styled.p`
    position: absolute; 
    top:20px;
    left: 20px;
    padding: 10px 7px;
    border-radius: 5px;
    font-weight: bold;
    background-color: ${(prop)=> prop.theme.accent}
`
export const InnerWrapper = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 3px;
`
export const Genres = styled.p`
`
export const ReleaseDate = styled.p`
`