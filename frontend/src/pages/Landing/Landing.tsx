import { useAuth0 } from "@auth0/auth0-react";

export default function LandingPage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="grid w-screen h-screen font-montserrat md:grid-cols-7">
      <main className="col-span-4 flex flex-col items-center justify-center gap-20 bg-stone-600">
        <div className="landing__info__title">
          <span className="text-7xl font-extrabold text-orange-100">
            Bloc<span className="text-lime-600">K</span>er
          </span>
        </div>
        <div className="flex flex-col lg:flex-row text-5xl font-medium text-orange-100">
          <span><span className="text-lime-600">TRACK</span>.</span>
          <span><span className="text-lime-600">SHARE</span>.</span>
          <span><span className="text-lime-600">IMPROVE</span>.</span>
        </div>
        <div className="flex">
          <button
            className="bg-lime-600 transition-colors rounded-sm p-4 text-2xl font-bold text-orange-100 hover:cursor-pointer hover:bg-lime-700"
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Log in
          </button>
        </div>
      </main>
      <aside className="col-span-3 hidden h-screen overflow-hidden bg-[url(/images/homeImage2.webp)] bg-center md:flex"></aside>
    </div>
  );
}
