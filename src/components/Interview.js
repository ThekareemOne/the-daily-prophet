import React from "react";

export default function Interview() {
  return (
    <article className="col-span-1 font-wolf">
      <div className="3 flex flex-col items-center justify-center border border-4 border-black py-4 px-2">
        <h1 className="text-2xl">EXCLUSIVE INTERVIEW</h1>
      </div>
      <div className="mt-6">
        <h1 className="text-center font-wolf text-xl font-bold">
          By Cornelius Fudge
        </h1>
        <p className="first-letter:font-wolf first-letter:text-3xl">
          We find ourselves, most unfortunately, in the same position we were
          two and a half years ago when the murderer Sirius Black escaped. We
          think it likely that these individuals, who include Black's cousin,
          Bellatrix Lestrange, have rallied around Black as their leader.
        </p>
        <br />
        <p>
          Nor do we think the two breakouts are unrelated. An escape of this
          magnitude suggests outside help, and we must remember that Black, as
          the first person ever to break out of Azkaban, would be ideally placed
          to help others follow in his footsteps.
        </p>
        <br />
        <p>
          We are, however, doing all we can to round up the criminals and beg
          the magical community to remain alert and cautious. On no account
          should any of these individuals be approached.
        </p>
      </div>
    </article>
  );
}
