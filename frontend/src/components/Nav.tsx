import { NavLink } from "react-router";
import useUser from "../lib/userContext/useUser";

interface Props{
  text: string
  link: string
}

function NavButton({text, link}: Props) {
  return (
    <div className="flex h-full items-center p-5 transition-colors hover:cursor-pointer hover:bg-stone-100">
      <NavLink to={link}>{text}</NavLink>
    </div>
  );
}

function NavProfile(){
  const {user} = useUser();
  return(
    <div className="">
      <img src={user?.picture} className="border-2 border-lime-600 rounded-full h-12" />
    </div>
  )
}

export default function Nav() {
  return (
    <header className="flex h-18 items-center justify-center border-b-2 border-stone-100">
      <div className="flex h-full">
        <NavButton text="Feed" link="/feed" />
        <NavButton text="Dashboard" link="/dashboard"/>
      </div>
      <NavProfile/>
    </header>
  );
}
