import { getCast } from "service/moviesApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
/* import ava from "../DefaultImg/profile_anonym.jpg"; */

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    
 
    useEffect(() => {
      getCast(movieId).then(setCast)

    }, [movieId]);
   console.log(cast);

  return(
    <div>{
      cast &&
    (<ul style={{display: "flex", flexWrap: 'wrap', gap: '8px'}}>
      {cast.map((actor) => (
        <li key={actor.id}>
          <img width='200'
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
          alt={actor.name}/>
          <h3>{actor.name}</h3>
        </li>
      ))}
    </ul>
      )}
    </div>
  );
} 
export default Cast