import React, { useImperativeHandle, useState } from "react";
let productList = [
  "",
  "violet",
  "white",
  "pink",
  "orange",
  "#00fff",
  "purple",
  "gold",
  "green",
  "red",
];
function ProductImages({ product, initialValue, refValue }, ref) {
  let getState = () => {
    return image;
  };
  let [image, setImage] = useState(
    initialValue == "" ? productList[0] : initialValue
  );
  useImperativeHandle(ref, () => ({
    getState,
  }));
  return (
    <section className="flex1 gap24 row align_center product_images">
      <section className="product_scroll product_image_scroll">
        <section className="gap16 column j_center product_small_images">
          {productList.map((e) => {
            return (
              <img
                src={product.image}
                alt=""
                className={`product_img_small ${e == image ? "border" : ""}`}
                style={{ background: `${e}` }}
                key={e}
                onClick={() => {
                  if (image !== e) {
                    setImage((image = e));
                    initialValue !== "" && refValue.current.click();
                  }
                }}
              />
            );
          })}
        </section>
      </section>
      <section className=" align_center width100">
        <img
          src={product.image}
          alt=""
          className="width100 product_img_large"
          style={{ background: `${image}` }}
        />
      </section>
      {console.log("image")}
    </section>
  );
}
export default React.forwardRef(ProductImages);
