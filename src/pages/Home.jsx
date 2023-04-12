import { useState, useEffect,  } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchTrends, fetchGenres } from '../api/tmbApiService';
import MovieList from '../components/MovieList/MovieList';
import Pagination from '../components/Pagination/Pagination';

const Home = ()=> {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [movies, setTrendingMovies] = useState({ results: [] });
  const location = useLocation();
  const pageNum = Number(searchParams.get('page')) || 1;
  
    useEffect(()=>{
        const trendingMoviesArr = async (page) => {
            try {
              const movieArr = await fetchTrends(page);
              setTrendingMovies(movieArr);

            } catch (error) {
              console.log(error);
            }
        }
        
        fetchGenres();
        trendingMoviesArr(pageNum);
    },[pageNum])

    return (
        <>
        <MovieList movieArr={movies.results} location={location}/>
        <Pagination 
          itemsPerPage={20}
          totalItems={movies.total_results}
          setSearchParams={setSearchParams}
          params={searchParams}
          location={location}/>
        </>
    )
}

export default Home;