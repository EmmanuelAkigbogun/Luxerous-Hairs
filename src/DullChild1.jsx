import React from "react";
import { useState, useImperativeHandle } from "react";
function DullChild1(props, ref) {
  let lover = () => {
    console.log(l);
    se((l = "#"+String(Math.random()).slice(2, 8)));
  };
  let [l, se] = useState("green");
  useImperativeHandle(ref, () => ({
    lover,
  }));
  return (
    <>
      <section className="row gap32">
        <button
          className="heading heading1"
          onClick={() => {
            se((l = "red"));
          }}
        >
          click red
        </button>
        <button
          className="heading heading1"
          onClick={() => {
            se((l = "blue"));
          }}
        >
          click blue
        </button>
        <button
          className="heading heading1"
          onClick={() => {
            se((l = "purple"));
          }}
        >
          click purple
        </button>
      </section>
      <section style={{ color: l }} className="heading heading2">
        i own colors of the worlds
      </section>
    </>
  );
}
export default React.forwardRef(DullChild1);
