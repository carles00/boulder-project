import "./Landing.css";
import { useAuth0 } from "@auth0/auth0-react";
import image1 from "../../assets/images/homeImage2.webp";

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="landing">
      <main className="landing__info">
        <div className="landing__info__title">
          <span>
            Bloc<span className="font-highlight">K</span>er
          </span>
        </div>
        <div className="landing__info__subtitle">
          <span className="font-highlight">TRACK</span>.
          <span className="font-highlight">SHARE</span>.
          <span className="font-highlight">IMPROVE</span>.
        </div>
        <div className="landing__info__login">
          <button
            className="landing__info__login__button"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Log In
          </button>
        </div>
      </main>
      <aside className="landing__image__container">
        <img className="landing__image" src={image1} alt="" />
      </aside>
    </div>
  );
}
