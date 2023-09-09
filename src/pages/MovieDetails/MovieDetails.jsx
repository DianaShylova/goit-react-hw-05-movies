import { useEffect, useRef, useState, Suspense } from "react";
import { Outlet, useParams, Link, useLocation } from "react-router-dom";
import { getMovieDetails } from "service/moviesApi";


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
    <>
      <Link to={backLink.current}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
      </div>
      <p>{original_title}</p>
      <h3>Overview</h3>
      <p>{overview} </p>
      <h3>Genres</h3>
      <p>{vote_average}</p>
      <ul>
        {genres.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          {' '}
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
     <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
  
}

export default MovieDetails