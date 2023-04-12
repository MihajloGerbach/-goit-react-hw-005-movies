import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../api/tmbApiService';
import { CastWrapper, CastItem, Img, Name, Character } from './Cast.styled';

const Cast = ()=> {
  const { movieId } = useParams();
  const [ cast, setCast] = useState([]);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500';

  useEffect(()=>{
    const foundMovieCast = async (movId) => {
        try {
          const movieCast = await fetchMovieCast(movId);
          setCast(movieCast);

        } catch (error) {
          console.log(error);
        }
    }

    foundMovieCast(movieId);
  }, [movieId]);

  return (
    <CastWrapper>
    {cast.map(({id, original_name, character, profile_path})=> {
        return (
            <CastItem key={id}>
                <Img src={profile_path ? `${BASE_URL_IMG}${profile_path}` : 'https://picsum.photos/seed/cats/230/345'} alt="name" />
                <Name>Name: {original_name}</Name>
                <Character>Character: {character}</Character>
            </CastItem>
        )
    })}
    </CastWrapper>
  )

}

export default Cast;