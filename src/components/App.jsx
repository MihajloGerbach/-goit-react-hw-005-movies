import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movies/:movieId' element={<MoviesDetails />}>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='cast' element={<Cast />}/>
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
      <ToastContainer />
    </>
  );
};