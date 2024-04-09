import React from "react";
import Zodiac from "./Zodiac";
import Date from "./Date";
import { useAppContext } from "../AppContext";

export default function Header() {
  const { showScene } = useAppContext();

  return (
    <header className="w-full relative z-10">
      <nav
        className={`flex flex-col md:flex-row  gap-3 items-center justify-around  py-5 px-4 border-b-8 ${
          showScene ? "border-lime-300" : "border-black"
        } border-double`}
      >
        <Zodiac />
        <div>
          <h1 className="font-wolf text-center text-6xl font-bold">
            THE DAILY PROPHET
          </h1>
          <h1 className="font-wolf text-center text-md flex items-center justify-center">
            <img
              src="/assets/star.png"
              alt="star"
              width="20px"
              className="inline mb-1"
            />
            <span className="mx-1">
              THE WIZARD WORLD'S BEGULLING BROADSHEET OF CHOICE
            </span>
            <img
              src="/assets/star.png"
              alt="star"
              width="20px"
              className="inline mb-1"
            />
          </h1>
        </div>
        <Date />
      </nav>
    </header>
  );
}
