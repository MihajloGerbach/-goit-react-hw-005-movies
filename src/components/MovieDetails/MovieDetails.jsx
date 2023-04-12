import PropTypes from 'prop-types';
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from '../Spinner/Spinner';
import {GoBackLink, 
    ContentWrapper, 
    Img, 
    DescrWrapper, 
    Title, 
    UserScore, 
    SubTitle, 
    Overview, 
    SubSubTitle, 
    GenresList, 
    StyledNavLink, 
    NavBar} from './MovieDetails.styled'

const MovieDetails = ({movieDetails: {poster_path, genres, original_title, overview, vote_average}, location})=> {
    const backLinkHref = location.state?.from ?? "/movies";
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

    return(
        <>
        <GoBackLink to={backLinkHref}> Back to Movies</GoBackLink>
        <ContentWrapper>
                <Img src={`${BASE_URL_IMG}${poster_path}`} alt={original_title}/>
            <DescrWrapper>  
                <Title>{original_title}</Title>
                <UserScore>Users score: {`${(vote_average * 10).toFixed(0)}%`}</UserScore>
                <SubTitle>Overview</SubTitle>
                <Overview>{overview}</Overview>
                <SubSubTitle>Genres</SubSubTitle>
                {genres && (<GenresList>
                                {genres.map(({ name, id }) => <li key={id}>{name}</li>)}
                            </GenresList>)}
                <NavBar>
                    <StyledNavLink to='reviews' location={location}>Reviews</StyledNavLink>
                    <StyledNavLink to='cast' location={location}>Cast</StyledNavLink>
                </NavBar>
            </DescrWrapper>
        </ContentWrapper>

        <Suspense fallback={<Spinner />}>
            <Outlet/>   
        </Suspense>
               
        </>
    )
}

export default MovieDetails;

MovieDetails.propTypes = {
    movieDetails: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
}