import { getCast } from "service/moviesApi";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noava from "../DefaultImg/profile_anonym.jpg";
import css from "./Cast.module.css";

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    
 
    useEffect(() => {
      getCast(movieId).then(setCast)

    }, [movieId]);
   

  return(
    <div className={css.cast_container}>{
      cast.length>0 &&
    (<ul className={css.cast_list}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.actor_card}>
          <img className={css.actor_pic}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                : `${noava}`
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