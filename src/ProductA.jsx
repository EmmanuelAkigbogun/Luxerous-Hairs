import { NavLink, useParams } from "react-router-dom";
import files from "./assets/files";
import data from "./assets/Bundles";
import { cartQuantity } from "./CartItems";
import { useState } from "react";
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
let length = ["5″", "6″", "7″", "8″", "9″", "10″", "11″", "12″"];
let starNumber = [0.5, 1.5, 2.5, 3.5, 4.5];
  let dataObject = [];
function ProductA() {
  let boolean = true;
  let Obj = {};
  let dia = useParams();
  let { par } = useParams();
  let [state, setState] = useState(length[0]);
  let [image, setImage] = useState(productList[0]);
  Obj["length"] = parseInt(state);
  Obj["image"] = image;
  Obj["id"] = par + "$starJet" + dia["dia"];
  Obj["quantity"] = 1;
  cartQuantity.length == 0
    ? window.localStorage.getItem("productAstorage") != null
      ? (dataObject = JSON.parse(
          window.localStorage.getItem("productAstorage")
        ))
      : (dataObject = cartQuantity)
    : (dataObject = cartQuantity);

  let a = data.filter((f) => f.text == par)[0].content[
    Number(dia["dia"].split("@@Static@")[0])
  ];
  let product = {
    review: a.reviews,
    image: a.image,
    price: a.price,
    fiveStars: a.reviews.filter((e) => e.star == "5").length,
    fourStars: a.reviews.filter((e) => e.star == "4").length,
    threeStars: a.reviews.filter((e) => e.star == "3").length,
    twoStars: a.reviews.filter((e) => e.star == "2").length,
    oneStars: a.reviews.filter((e) => e.star == "1").length,
    total: a.reviews.length === 0 ? 1 : a.reviews.length * 5,
  };

  let starValue =
    String(
      ((product.oneStars +
        product.twoStars * 2 +
        product.threeStars * 3 +
        product.fourStars * 4 +
        product.fiveStars * 5) *
        5) /
        product.total
    ).slice(0, 3) + " ";
  return (
    <>
      <section
        className={`parent_section product_a ${
          dia["shop"] == "My Product" || dia["shop"] == "New Product"
            ? "gap24"
            : "gap68"
        } row`}
      >
        <section className="flex1 gap24 row align_center product_images">
          <section className="product_scroll product_image_scroll">
            <section className="gap16 column j_center product_small_images">
              {productList.map((e) => {
                return (
                  <img
                    src={product.image}
                    alt=""
                    className={`product_img_small ${
                      e == image ? "border" : ""
                    }`}
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
        <section className="flex1 column gap68 j_center product_text">
          <section className="gap24 column">
            <section className="gap12 column">
              <h1 className="heading heading2">
                {dia["dia"].split("@@Static@")[1]}
              </h1>

              <section className="">
                <h2 className="heading heading1">${product.price}</h2>
                <section className="align_end column">
                  <section className="gap10 row">
                    <p className="paragraph paragraph1">Try Hair On with AR</p>
                    <img src={files.camera} alt="" />
                  </section>
                </section>
              </section>
              {dia["shop"] == "New Product" ? (
                ""
              ) : (
                <section className="space_between">
                  <section className="row gap4 review">
                    {starNumber.map((e) => {
                      return (
                        <img
                          src={
                            Number(starValue) > e
                              ? files.blackStar
                              : files.whiteStar
                          }
                          key={e}
                          alt={e + 1}
                        />
                      );
                    })}
                    <p className="paragraph paragraph2">
                      {starValue}({product.review.length} Reviews)
                    </p>
                  </section>
                </section>
              )}
            </section>
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
                          setState((state = e));
                        }}
                      >
                        {e}
                      </button>
                    );
                  })}
                </section>
              </section>
            </section>
          </section>
          {dia["shop"] == "My Products" || dia["shop"] == "New Product" ? (
            ""
          ) : (
            <section className="row gap24 width100 product_buttons">
              <button
                className="row gap10 button button0 border white_bg width100"
                onClick={() => {
                  dataObject.map((e, i) => {
                    if (
                      e["length"] == parseInt(state) &&
                      e["image"] == image &&
                      e["id"] == par + "$starJet" + dia["dia"]
                    ) {
                      ///dataObject[i]["quantity"] = dataObject[i]["quantity"] + 1;
                      boolean = false;
                    } else "";
                  });
                  boolean
                    ? (dataObject = dataObject.concat(Obj))
                    : (boolean = true);
                  console.log(dataObject);
                  window.localStorage.setItem(
                    "productAstorage",
                    JSON.stringify(dataObject)
                  );
                }}
              >
                <img src={files.bag} alt="a" />
                Add to Bag
              </button>
              <NavLink
                to={`/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/My Cart`}
                className="row gap10 button button0 black width100"
                state={dataObject}
              >
                Buy Now <img src={files.greaterArrow} alt="" />
              </NavLink>
            </section>
          )}
          {console.log(JSON.parse(JSON.stringify(dataObject)))}
          {console.log(dia["shop"] === undefined, 33)}
        </section>
      </section>
    </>
  );
}
export default ProductA;
