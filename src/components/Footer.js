import React from "react";
import { useAppContext } from "../AppContext";

export default function Footer() {
  const { showScene } = useAppContext();

  return (
    <footer
      className={`font-wolf text-center border-t-4 border-b-4 border-double ${
        showScene ? "border-lime-300" : "border-black"
      } py-2 relative z-10`}
    >
      The Daily Prophet
    </footer>
  );
}
