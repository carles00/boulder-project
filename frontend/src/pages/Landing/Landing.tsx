import useUnauthenticated from "../../hooks/useUnauthenticated";
import LoginForm from "../Auth/LoginForm";

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
          <LoginForm />
        </div>
      </main>
      <aside className="col-span-3 hidden h-screen overflow-hidden bg-[url(/images/homeImage2.webp)] bg-center md:flex"></aside>
    </div>
  );
}
