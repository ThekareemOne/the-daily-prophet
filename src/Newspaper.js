import React from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Interview from "./components/Interview";
import Hero from "./components/Hero";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function Newspaper() {
  return (
    <>
      <Header />
      <Title />
      <section className="mx-auto grid w-full max-w-7xl md:grid-cols-4 gap-x-3 bg-stone-300 p-4">
        <Hero />
        <Article />
        <Interview />
      </section>
      <Footer />
    </>
  );
}
