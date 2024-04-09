import React from "react";

export default function Article() {
  return (
    <article className="col-span-1 font-wolf">
      <h1 className="text-center font-wolf text-3xl font-bold italic">
        Have you seen this wizard?
      </h1>
      <hr className="m-auto my-4 w-[150px] border-2 border-black" />
      <h1 className="mt-3 text-center text-md font-bold italic">
        Sirius Black is the only person to have escaped Azkaban without any aid!
      </h1>
      <hr className="m-auto my-4 w-[150px] border-2 border-black" />
      <div>
        <h1 className="text-center font-wolf text-xl font-bold">
          By Karim Hisham
        </h1>
        <p className="first-letter:font-wolf first-letter:text-3xl">
          The Ministry of Magic announced late last night that there has been a
          mass breakout from Azkaban.
        </p>
        <br />
        <p>
          Speaking to reporters in his private office, Cornelius Fudge, Minister
          for Magic, confirmed that ten high-security prisoners escaped in the
          early hours of yesterday evening, and that he has already informed the
          Muggle Prime Minister of the dangerous nature of these individuals.
        </p>
        <br />
        <p>
          Cornelius Fudge has notified Muggle governments around the world of
          Black's breakout, to the chagrin of the International Federation of
          Warlocks. Fudge insists that Black's inherently dangerous nature
          warranted the notice.
        </p>
      </div>
    </article>
  );
}
