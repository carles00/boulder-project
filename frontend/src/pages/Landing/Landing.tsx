import { Link } from "react-router";
import useUnauthenticated from "../../hooks/useUnauthenticated";
import LoginForm from "../Auth/LoginForm";

export default function LandingPage() {
  useUnauthenticated();

  return (
    <div className="grid h-screen w-screen font-montserrat md:grid-cols-7">
      <main className="col-span-4 grid grid-rows-4 bg-stone-600">
        <div className="row-span-1 flex items-center justify-center">
          <span className="text-7xl font-extrabold text-orange-100">
            Bloc<span className="text-lime-600">K</span>er
          </span>
        </div>
        <div className="row-span-1 flex flex-col items-center justify-center text-5xl font-medium text-orange-100 lg:flex-row">
          <span>
            <span className="text-lime-600">TRACK</span>.
          </span>
          <span>
            <span className="text-lime-600">SHARE</span>.
          </span>
          <span>
            <span className="text-lime-600">IMPROVE</span>.
          </span>
        </div>
        <div className="row-span-2 flex flex-col items-center justify-center gap-5">
          <div className="w-80">
            <LoginForm />
          </div>
          <span className="text-stone-50">
            Dont have an account?{" "}
            <Link className="underline" to={"/signup"}>
              Sign Up now!
            </Link>
          </span>
        </div>
      </main>
      <aside className="col-span-3 hidden h-screen overflow-hidden bg-[url(/images/homeImage2.webp)] bg-center md:flex"></aside>
    </div>
  );
}
