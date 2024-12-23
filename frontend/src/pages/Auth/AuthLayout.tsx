import { Outlet } from "react-router";
import './AuthLayout.css'
import image1 from "../../assets/images/homeImage1.webp"
import image2 from "../../assets/images/homeImage2.webp"

export default function AuthLayout(){
  return(
    <>
      <aside className="right-aside">
        <img src={image1} className="home-image"></img>
      </aside>
      <div className="authContainer"> 
        <Outlet/>
      </div>
      <aside className="left-aside">
        <img src={image2} className="home-image"></img>
      </aside>
    </>
  )
}