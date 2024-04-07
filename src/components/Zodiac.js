import React from "react";

export default function Zodiac() {
  return (
    <div className="md:w-2/12 text-center md:text-left">
      <p className="font-title  text-xl font-bold">
        Zodiac{" "}
        <span>
          <img
            src="/assets/zodiac.png"
            alt="horoscope"
            width="35px"
            className="inline"
          />
        </span>{" "}
        Aspects
      </p>
      <p className="font-title text-md">
        <span>
          <img
            src="/assets/scorpio.png"
            alt="virgo"
            width="25px"
            className="inline"
          />
        </span>{" "}
        shows life with{" "}
        <span>
          <img
            src="/assets/aries.png"
            alt="aries"
            width="30px"
            className="inline"
          />
        </span>
      </p>
      <div className="flex">
        <div className="w-1/6">
          <img
            src="/assets/tarot.png"
            alt="caner"
            width="35px"
            className="inline"
          />
        </div>
        <div className="w-5/6 m-auto">
          <p className="font-title text-md">
            <span>
              Tarot predictions <br /> on page 4
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
