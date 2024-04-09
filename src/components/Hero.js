import React from "react";
import { useAppContext } from "../AppContext";

export default function Hero() {
  const { showScene } = useAppContext();

  return (
    <article className="col-span-2 p-3">
      <img
        className={`mb-5 h-auto border border-4 border ${
          showScene ? "border-lime-300" : "border-black"
        }`}
        src="/assets/azkaban.jpeg"
      />
    </article>
  );
}
