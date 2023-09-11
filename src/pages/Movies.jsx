import { MoviesList } from "../components/MoviesList/MoviesList";
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../service/moviesApi";
import { Form } from "../components/Form/Form"
import { Loader } from "components/Loader/Loader";


const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [moviesList, setMoviesList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const movieTitle = searchParams.get('movieTitle');

    useEffect(() => {
    console.log(movieTitle);
        if (!movieTitle) {
            return;
        }
        setIsLoading(true);

        const searchMoviesByName = async () => {
            try {
                const searchingMovie = await getSearchMovie(movieTitle);
                
                if (searchingMovie.length === 0) {
                    alert("Sorry, nothing find 😭");
                    return
                }
                setMoviesList(searchingMovie);
            } catch (error) {
                alert("Sorry, something went wrong... 😭");
            } finally {
                setIsLoading(false);
            }
         };
        searchMoviesByName();
        }, [movieTitle]);
    
  const handleSubmit = query => {
    setSearchParams({movieTitle: query });
  };
console.log(moviesList);
  return (
      <div>
           {isLoading && <Loader />}
                
      <Form onSubmit={handleSubmit} nameButton={'Search Film'} />
      <MoviesList movies={moviesList} />
    </div>
  );
};



export default Movies;




