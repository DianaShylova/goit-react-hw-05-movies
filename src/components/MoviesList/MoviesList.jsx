import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, original_title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>
                        {original_title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};