import { getReviews } from "service/moviesApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId).then(setReviews)

    }, [movieId]);

      
    return (
       <> 
        <h2>Reviews</h2>
        {reviews.length>0?
      <ul className={css.review_content}>
        {reviews.map((review) => (
          <li className={css.review_item} key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>:<p>No reviews</p>
        }
    </>
  );
};
 
export default Reviews;