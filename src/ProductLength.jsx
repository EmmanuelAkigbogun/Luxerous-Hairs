import React, { useImperativeHandle, useState } from "react";
let length = ["5″", "6″", "7″", "8″", "9″", "10″", "11″", "12″"];
function ProductLength({ initialValue, refValue }, ref) {
  let getState = () => {
    return state;
  };
  let [state, setState] = useState(
    initialValue == "" ? length[0] : String(initialValue) + "″"
  );
  useImperativeHandle(ref, () => ({
    getState,
  }));
  return (
    <section className="gap8 column">
      <p className="paragraph paragraph2">Length</p>
      <section className="product_scroll">
        <section className="gap12 row nowrap">
          {length.map((e) => {
            return (
              <button
                className={`button button2 border ${
                  state == e ? "black_white" : "white_bg"
                }`}
                key={e}
                onClick={() => {
                  if (state !== e) {
                    setState((state = e));
                    initialValue !== "" && refValue.current.click();
                  }
                }}
              >
                {e}
              </button>
            );
          })}
        </section>
      </section>
      {console.log("length")}
    </section>
  );
}
export default React.forwardRef(ProductLength);
