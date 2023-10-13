import React from "react";
import { Details } from "../components/Details";
import { Navbar } from "../components/navbar/Navbar";
import { TrailerProvider } from "../api/TrailerContext";

export const DetailsMovies = () => {
  return (
    <div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-20">
        <Navbar />
      </div>
      <TrailerProvider>
        <Details />
      </TrailerProvider>
    </div>
  );
};
