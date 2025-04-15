import { Link } from "react-router";
import useUnauthenticated from "../../hooks/useUnauthenticated";

export default function LandingPage() {
  useUnauthenticated();

  return (
    <div className="grid h-screen w-screen font-montserrat md:grid-cols-7">
      <main className="col-span-4 flex flex-col items-center justify-center gap-20 bg-stone-600">
        <div className="landing__info__title">
          <span className="text-7xl font-extrabold text-orange-100">
            Bloc<span className="text-lime-600">K</span>er
          </span>
        </div>
        <div className="flex flex-col text-5xl font-medium text-orange-100 lg:flex-row">
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
        <div className="flex">
          <div className="flex h-15 w-30 items-center justify-center rounded-sm bg-lime-600 text-2xl font-bold text-orange-100 transition-colors hover:cursor-pointer hover:bg-lime-700">
            <Link
              className="flex h-full w-full items-center justify-center"
              to={"/login"}
            >
              Log In
            </Link>
          </div>
        </div>
      </main>
      <aside className="col-span-3 hidden h-screen overflow-hidden bg-[url(/images/homeImage2.webp)] bg-center md:flex"></aside>
    </div>
  );
}
