import { useEffect, useRef, useState, Suspense } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getMovieDetails } from "service/moviesApi";
import nofilmposter from "../../components/DefaultImg/film.jpg"
import css from "./MovieDetails.module.css"

const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
  const backLink = useRef(location.state?.from || '/'); 
 
  useEffect(()=>{
    getMovieDetails(movieId).then(data => setMovieDetail(data))
  },[movieId]);

  if(!movieDetail) return;

  const { original_title, overview, genres, poster_path, vote_average } =
    movieDetail;

  return (
    <div div className={css.movie_details_container}>
      <Link to={backLink.current} className={css.back_button}>Go back</Link>
      <div >
        <img className={css.movie_details_pic}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `${nofilmposter}`
          }
          
          loading="lazy"
          alt="poster"
        />
      </div>
      <p className={css.film_title}>{original_title}</p>
      <h3>Overview</h3>
      <p className={css.overview_info}>{overview} </p>
      <h3>Genres</h3>
      <p>{vote_average}</p>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <h4>Additional information</h4>
      <ul className={css.addinfo}>
        <li>
          <Link to={`cast`} className={css.addinfo_btn}>Cast</Link>
        </li>
        <li>
          {' '}
          <Link to={`reviews`} className={css.addinfo_btn}>Reviews</Link>
        </li>
      </ul>
     <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
  
}

export default MovieDetails