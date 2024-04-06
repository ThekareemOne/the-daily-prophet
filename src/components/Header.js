import React from "react";
import Zodiac from "./Zodiac";
import Date from "./Date";

export default function Header() {
  return (
    <header className="w-full">
      <nav className="flex flex-col md:flex-row  gap-3 items-center justify-around  bg-stone-300 py-5 px-4">
        <Zodiac />
        <div>
          <h1 className="font-title text-center text-6xl font-bold text-black">
            THE DAILY PROPHET
          </h1>
          <h1 className="font-title text-center text-md">
            THE WIZARD WORLD'S BEGULLING BROADSHEET OF CHOICE
          </h1>
        </div>
        <Date />
      </nav>
    </header>
  );
}
