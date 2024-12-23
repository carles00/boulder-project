import { Link, NavLink, Outlet } from "react-router";
import "./Home.css";

export default function Home() {
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
          <Link to={"/logIn"}>Log In</Link>
        </div>
      </header>
      <Outlet />
      <footer className="home-foot">Lorem ipsum</footer>
    </>
  );
}
