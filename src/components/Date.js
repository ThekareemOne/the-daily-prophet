import React from "react";

export default function Date() {
  return (
    <div className="font-title flex md:w-2/12 items-center justify-center text-sm font-bold">
      <div className="w-1/2">
        <img
          src="/assets/illuminati.png"
          alt="caner"
          width="80px"
          className="inline"
        />
      </div>
      <div className="w-1/2 m-auto">
        <p className="font-title text-md">
          Saturday,
          <br /> July 31th 1996 <br /> Daily Prohpet <br /> Evening Edition{" "}
          <br />
          Issue #4539
        </p>
      </div>
    </div>
  );
}
