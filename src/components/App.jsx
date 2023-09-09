import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header/Header";
/* const easyLazy = path => {
    return lazy(() => import(`pages/${path}`));
} */
/* const Header = lazy(() => import("./Header/Header")); */
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                    </Route>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

