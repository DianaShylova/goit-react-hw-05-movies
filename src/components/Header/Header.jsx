import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.header_nav}>
          <ul className={css.header_list}>
            <li>
              <NavLink to="/" className={css.link}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={css.link}>Movies</NavLink>
            </li>            
            
          </ul>
        </nav>
      </header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;