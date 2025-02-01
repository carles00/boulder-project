import { Outlet } from "react-router";
import Nav from "./Nav";

export default function MainLayout() {
  return (
    <div className="flex size-full flex-col">
      <Nav/>
      <div className="grid grow grid-cols-3 bg-stone-50 py-10">
        <Outlet />
      </div>
    </div>
  );
}
