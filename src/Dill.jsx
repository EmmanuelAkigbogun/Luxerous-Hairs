import { useState } from "react";
function Dill() {
  let [r, q] = useState({ a1: 1, a2: 1, a3: 1 });
  return (
    <>
      <button
        onClick={() => {
          q((r = { a1: r["a1"] + 1, a2: r["a2"], a3: r["a3"] }));
        }}
      >
        light
      </button>
      <button
        onClick={() => {
          q((r = { a1: r["a1"], a2: r["a2"] + 1, a3: r["a3"] }));
        }}
      >
        hate
      </button>
      <button
        onClick={() => {
          q((r = { a1: r["a1"], a2: r["a2"], a3: r["a3"] + 1 }));
        }}
      >
        love
      </button>
      {console.log(r)}
    </>
  );
}
export default Dill;
