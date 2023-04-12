import PropTypes from 'prop-types';
import genresConvertor from '../../utils/genresTransform';
import { NavLink } from 'react-router-dom';
import { getYear } from 'date-fns';
import { 
    MoviesWrapper, 
    MovieCard, 
    DescrWrapper, 
    InnerWrapper, 
    Title, 
    Img, 
    VoteAverege, 
    Genres, 
    ReleaseDate} from './MovieList.styled';


const MovieList = ({movieArr = [], location})=> {
    const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

    return(
        <MoviesWrapper>
            {movieArr.map(({id, original_title, original_name, vote_average, poster_path, genre_ids, release_date, first_air_date})=> {
                return (
                    <MovieCard key={id}>
                        <NavLink to={`movies/${id}`} state={{from: location}} >
                            <Img src={`${BASE_URL_IMG}${poster_path}`} alt={original_title}/>
                            <DescrWrapper>
                                <Title>{original_title || original_name}</Title>
                                <VoteAverege>{vote_average.toFixed(1)}</VoteAverege>
                                <InnerWrapper>
                                    <Genres>{genresConvertor(genre_ids).join(', ')}</Genres>
                                    <ReleaseDate>| {getYear(new Date(release_date || first_air_date))}</ReleaseDate>
                                </InnerWrapper>
                            </DescrWrapper>
                        </NavLink>
                    </MovieCard>
                )
            })}
        </MoviesWrapper>)
}

export default MovieList;

MovieList.propTypes = {
    movieArr: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
}