import { Outlet } from "react-router";
import useUnauthenticated from "../../hooks/useUnauthenticated";

export default function AuthLayout() {
  useUnauthenticated();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-stone-50 font-montserrat md:grid-cols-7">
      <main className="flex w-[40%]">
        <Outlet />
      </main>
    </div>
  );
}
