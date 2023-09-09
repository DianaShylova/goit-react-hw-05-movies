import { getReviews } from "service/moviesApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getReviews(movieId).then(setReviews)

    }, [movieId]);

    console.log(reviews);
  
    return (
       <> 
        <h2>Reviews</h2>
        {reviews.length>0?
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
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