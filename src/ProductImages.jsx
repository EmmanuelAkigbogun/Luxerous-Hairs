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
function ProductImages({product}, ref) {
  let getState = () => {
    return image;
  };
  let [image, setImage] = useState(productList[0]);
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
                  setImage((image = e));
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
    </section>
  );
}
export default React.forwardRef(ProductImages);
