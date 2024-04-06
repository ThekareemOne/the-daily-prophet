import React from "react";
import Header from "./components/Header";

export default function Newspaper() {
  return (
    <>
      <Header />

      <section className="mx-auto flex  items-center justify-between border-t border-b border-black bg-stone-300 py-3 px-5 font-thin">
        <span>Lorem</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum medium sectra</span>
      </section>
      <section className="bg-stone-300 py-5">
        <h1 className="text-center font-serif text-7xl font-black">
          THE OLD PAPER NEWS
        </h1>
        <h1 className="mt-5 text-center font-serif text-4xl font-black italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit?
        </h1>
      </section>

      <section className="mx-auto grid w-full max-w-7xl md:grid-cols-4 gap-x-3 bg-stone-300 p-4">
        <article className="col-span-2 p-3">
          <img
            className="mb-5 h-auto border border-4 border border-black/50"
            src="https://preview.redd.it/xgw7omakm0l61.jpg?width=640&crop=smart&auto=webp&s=b1196117d38678f5f28484d89882a2d8f9f0fedc"
          />
          <p className="font-sans text-sm first-letter:font-serif first-letter:text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
          <p className="font-sans text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
          <br />
          <p className="font-sans text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
          <p className="font-sans text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
          <p className="font-sans text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
        </article>
        <article className="col-span-1">
          <h1 className="text-center font-serif text-3xl font-bold italic">
            Lorem ipsum vicinum?
          </h1>
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <h1 className="mt-3 text-center text-xl font-bold italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </h1>
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <div>
            <h1 className="text-center font-serif text-xl font-bold">
              By Nikola Mrsic.
            </h1>
            <p className="first-letter:font-serif first-letter:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
          </div>
        </article>

        <article className="col-span-1">
          <div className="3 flex flex-col items-center justify-center border border-4 border-black py-4 px-2">
            <h1 className="text-3xl">LOREM SERBIA NEWS</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-center font-serif text-xl font-bold">
              By Nikola Mrsic.
            </h1>
            <p className="first-letter:font-serif first-letter:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
          </div>
        </article>
      </section>
      <hr className="m-auto my-4 w-full border border-black/40" />
      <section className="mx-auto grid w-full max-w-7xl md:grid-cols-4 grid-cols-1 gap-x-3 bg-stone-300 p-4">
        <article className="col-span-1">
          <h1 className="text-center font-serif text-3xl font-bold italic">
            Lorem ipsum vicinum?
          </h1>
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <h1 className="mt-3 text-center text-xl font-bold italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit?
          </h1>
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <div>
            <h1 className="text-center font-serif text-xl font-bold">
              By Nikola Mrsic.
            </h1>
            <p className="first-letter:font-serif first-letter:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              sint? Eos aliquam, maiores minima amet doloremque veritatis
              consectetur iusto autem facilis laudantium nisi, dolor enim
              impedit inventore quis, quisquam veniam!
            </p>
          </div>
        </article>

        <article className="col-span-3 p-3">
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <h1 className="mb-3 text-center font-serif text-6xl">
            NOVI SAD SERBIA
          </h1>
          <hr className="m-auto my-4 w-[150px] border-2 border-black" />
          <img
            className="mb-5 h-auto w-full border border-4 border border-black/50"
            src="http://upload.wikimedia.org/wikipedia/commons/0/03/%C3%9Ajvid%C3%A9k_V%C3%A1rosh%C3%A1za_1900.jpg"
          />
          <h1 className="m-auto my-5 text-center">Main Squere in Novi Sad</h1>
          <p className="font-sans text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            nulla voluptate itaque. Doloremque eveniet est, ratione illo atque,
            ut hic nemo earum rem, in tempore! Placeat commodi exercitationem
            sit sed.
          </p>
          <p className="mt-3 md:columns-3 columns-2 font-sans text-sm first-letter:font-serif first-letter:text-3xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem impedit debitis unde necessitatibus voluptatem
            nostrum. Laborum, ad cumque nihil quam quaerat atque soluta minus.
            Dolorem, autem veniam. Laudantium, at architecto. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Laborum maiores quo, quis
            velit provident rerum molestiae animi. Magni, delectus maiores? Sunt
            at maiores exercitationem pariatur nihil eveniet facere suscipit
            praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur quam nisi fuga recusandae adipisci, similique
            dolor soluta, perspiciatis provident rem ex, maxime neque voluptatum
            iure doloremque voluptatem impedit ipsam deleniti. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dicta debitis assumenda
            facere laudantium vel culpa accusantium, possimus alias rem,
            quibusdam explicabo porro excepturi amet! Accusamus mollitia libero
            at cumque quae!
          </p>
        </article>
      </section>
    </>
  );
}
