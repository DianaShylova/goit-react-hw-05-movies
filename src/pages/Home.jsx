import { useEffect } from "react";
import { getTrendingMovies } from "service/moviesApi";
import { useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import {Loader} from "components/Loader/Loader"

const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState('');

    useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setIsLoading(true);
        const films = await getTrendingMovies();
        setTrendMovies(films);
      } catch (isError) {
        setIsError(isError.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendMovies();
    }, []);
    
     return (
    <div>
             <h1>Trending today</h1>
             {isError && <p>{isError}😭</p>}
             {isLoading && <Loader />}
             <MoviesList movies={trendMovies}/>
            
    </div>
  );
}


export default Home;