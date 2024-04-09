import React from "react";
import { useAppContext } from "../AppContext";

export default function Zodiac() {
  const { showScene } = useAppContext();

  return (
    <div className="md:w-2/12 text-center md:text-left relative z-10">
      <p className="font-wolf  text-xl font-bold">
        Zodiac{" "}
        <span>
          <img
            src={`/assets/zodiac${showScene ? "_green.svg" : ".png"}`}
            alt="horoscope"
            width="35px"
            className="inline"
          />
        </span>{" "}
        Aspects
      </p>
      <p className="font-wolf text-md">
        <span>
          <img
            src={`/assets/scorpio${showScene ? "_green.svg" : ".png"}`}
            alt="virgo"
            width="25px"
            className="inline"
          />
        </span>{" "}
        shows life with{" "}
        <span>
          <img
            src={`/assets/aries${showScene ? "_green.svg" : ".png"}`}
            alt="aries"
            width="30px"
            className="inline"
          />
        </span>
      </p>
      <div className="flex">
        <div className="w-1/6">
          <img
            src={`/assets/tarot${showScene ? "_green.svg" : ".png"}`}
            alt="caner"
            width="35px"
            className="inline"
          />
        </div>
        <div className="w-5/6 m-auto">
          <p className="font-wolf text-md">
            <span>
              Tarot predictions <br /> on page 4
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
