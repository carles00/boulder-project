import { Link, NavLink, Outlet } from "react-router";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function HomeLayout() {
  const {loginWithRedirect} = useAuth0();

  return (
    <>
      <header className="home-head">
        <div className="nav-buttons-container">
          <h2>
            <Link to={"/"}>
              Bloc<span className="kLogo">K</span>er
            </Link>
          </h2>
          <nav className="home-nav">
            <div className="nav-button">
              <NavLink className={"nav-link"} to={"/features"}>
                For Climbers
              </NavLink>
            </div>
            <div className="nav-button">
              <NavLink className={"nav-link"} to={"/gyms"}>
                For Gyms
              </NavLink>
            </div>
          </nav>
        </div>
        <div>
          <button onClick={()=> loginWithRedirect()}>Log in</button>
        </div>
      </header>
      <Outlet />
      <footer className="home-foot">Lorem ipsum</footer>
    </>
  );
}
