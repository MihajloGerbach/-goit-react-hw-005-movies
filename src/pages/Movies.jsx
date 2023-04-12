import { useState, useEffect, useRef  } from 'react';
import { useSearchParams, useLocation } from "react-router-dom";
import { fetchMovies } from '../api/tmbApiService';
import { debounce } from "lodash";
import { MovieSearchPlug } from "../components/PlugComponents/Plug"
import MovieList from '../components/MovieList/MovieList';
import SearchField from '../components/SearchField/SearchField';
import Pagination from '../components/Pagination/Pagination';

const Movies = ()=> {
    const [movies, setMovies] = useState({ results: [] });
    const [searchParams, setSearchParams] = useSearchParams({
      query: '',
      page: 1,
    });
    const isFirstRender = useRef(true);
    const location = useLocation();
    const query = searchParams.get('query') ?? '';
    const pageNum = Number(searchParams.get('page')) || 1;

    useEffect(()=>{
        const foundMoviesOnSearch = async (request) => {
            try {
              const movieArr = await fetchMovies(request, pageNum, isFirstRender.current);
              setMovies(movieArr);

            } catch (error) {
              console.log(error);
            }
        }

        if (!isFirstRender.current) {
          const debouncedSearch = debounce(foundMoviesOnSearch, 400);
          debouncedSearch(query);
          
          return () => debouncedSearch.cancel();
        } else {
          isFirstRender.current = false;
        }
    },[query, pageNum])

    const updateQueryString = (query) => {
        const nextQuery = query !== "" ? { query, page: 1 } : {};
        setSearchParams(nextQuery);
      };

    return (
        <>
        <SearchField value={query} queryString={updateQueryString}/>
        {movies.results.length ? <>
          <MovieList movieArr={movies.results} location={location}/>
          <Pagination 
            itemsPerPage={20}
            totalItems={movies.total_results}
            setSearchParams={setSearchParams}
            params={searchParams}
            location={location}/>
          </> : <MovieSearchPlug/>}
        </>
    )
}

export default Movies;