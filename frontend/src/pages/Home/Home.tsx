import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import image1 from "../../assets/images/homeImage2.webp";

export default function HomeLayout() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <main className="main-home">
        <h1 className="main-title">
          Boulder Proje<span className="font-highlight">K</span>t
        </h1>
        <h2 className="main-subtitle">
          <span className="font-highlight">SHARE</span>.   
          <span className="font-highlight">STORE</span>. 
          <span className="font-highlight">TRACK</span>.
          Your boulders with your friends
        </h2>
        <div className="main-button-container">
          <button className="main-button" onClick={()=>{loginWithRedirect()}}>
            Log In
          </button>
        </div>
      </main>
      <aside className="main-image-container">
        <img className="main-image" src={image1} alt="" />
      </aside>
    </>
  );
}
