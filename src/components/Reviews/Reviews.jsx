import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { fetchMovieReviews } from '../../api/tmbApiService';
import { ReviewsWrapper, ReviewCard, InnerWrapper, Author, Content } from './Reviews.styled';
import { ReviewsPlug } from '../../components/PlugComponents/Plug';
import shortReview from '../../utils/makeItShort';

const Reviews = ()=> {
  const { movieId } = useParams();
  const [ reviews, setReviews] = useState([]);

  useEffect(()=>{
    const foundMovieReviews = async (movId) => {
        try {
          const movieRvs = await fetchMovieReviews(movId);
          setReviews(movieRvs);

        } catch (error) {
          console.log(error);
        }
    }

    foundMovieReviews(movieId);
  }, [movieId]);

  
  return (
    <ReviewsWrapper>
    {reviews.length ? reviews.map(({id, author, content})=> {
          return (
              <ReviewCard key={id}>
                  <InnerWrapper>
                    <RxAvatar size={32} style={{color: '#B1A296'}}/>
                    <Author>{author}</Author>
                  </InnerWrapper>
                 <Content>{shortReview(content)}</Content>
              </ReviewCard>
          )
      }) : <ReviewsPlug/>}
    </ReviewsWrapper>
  )

}

export default Reviews;