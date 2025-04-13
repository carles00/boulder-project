import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-stone-600 font-montserrat md:grid-cols-7">
      <main className="flex">
        <Outlet />
      </main>
    </div>
  );
}
