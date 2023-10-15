import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Carousel } from "../components/Carousel";
import { Slider } from "../components/Slider";
import { FooterComponent } from "../components/Footer";
import { useEffect } from "react";
import { CookieKeys, CookieStorage } from "../utils/cookies";

export const Homepages = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = CookieStorage.get(CookieKeys.AuthToken);

    if (!authToken) {
      navigate("/login");
    }
  });

  const handleLogout = () => {
    CookieStorage.remove(CookieKeys.AuthToken, {
      path: "/",
      expires: new Date(0),
    });

    navigate("/login");
  };

  return (
    <div className="bg-slate-900">
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <Navbar handleLogout={handleLogout} />
      </div>
      <Carousel />
      <div className="flex flex-row justify-between container mx-auto px-10 mt-5">
        <h1 className="font-black text-4xl text-red-500">Popular Movie</h1>
        <Link
          to="/allmovies"
          className="flex flex-row items-center text-red-500 font-bold text-lg"
        >
          See All Movies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      </div>
      <Slider />
      <FooterComponent />
    </div>
  );
};
