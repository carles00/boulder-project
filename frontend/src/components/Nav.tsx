import { NavLink } from "react-router";

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

export default function Nav() {
  return (
    <header className="flex h-12 items-center justify-center border-b-2 border-stone-100">
      <NavButton text="Feed" link="/feed" />
      <NavButton text="Dashboard" link="/dashboard"/>
      <NavButton text="Profile" link="/profile"/>
    </header>
  );
}
