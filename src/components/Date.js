import React from "react";
import { useAppContext } from "../AppContext";

export default function Date() {
  const { toggleScene } = useAppContext();

  return (
    <>
      <div className="font-wolf flex md:w-2/12 items-center justify-center text-sm font-bold">
        <div className="w-1/2">
          <img
            src="/assets/illuminati.png"
            alt="caner"
            width="80px"
            className="inline cursor-pointer"
            onClick={toggleScene}
          />
        </div>
        <div className="w-1/2 m-auto">
          <p className="font-wolf text-md">
            Saturday,
            <br /> July 31th 1996 <br /> Daily Prohpet <br /> Evening Edition{" "}
            <br />
            Issue #4539
          </p>
        </div>
      </div>
    </>
  );
}
