import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
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