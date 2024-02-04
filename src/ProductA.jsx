import { NavLink, useLocation, useParams } from "react-router-dom";
import files from "./assets/files";
import data from "./assets/Bundles";
import { cartQuantity } from "./CartItems";
import { useRef, useState } from "react";
import Overlay from "./Overlay";
import UploadAr from "./UploadAr";
import Ar from "./Ar";
import ProductLength from "./ProductLength";
import ProductImages from "./ProductImages";
let starNumber = [0.5, 1.5, 2.5, 3.5, 4.5];
let dataObject = [];
function ProductA() {
  let boolean = true;
  let dia = useParams();
  let { par } = useParams();
  let [ar, setAr] = useState("");
  let aImages = useRef(null);
  let aLength = useRef(null);
  let refValue=useRef(null)
  cartQuantity.length === 0
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
  let history = useLocation();
    console.log(cartQuantity[history.state]?.quantity);
    console.log(cartQuantity[history.state]?.length);
  return (
    <>
      <section
        className={`parent_section product_a ${
          dia["shop"] == "My Product" || dia["shop"] == "New Product"
            ? "gap24"
            : "gap68"
        } row`}
      >
        <ProductImages
        refValue={refValue}
          ref={aImages}
          product={product}
          initialValue={
            history.state == null ? "" : cartQuantity[history.state]?.image
          }
        />
        <section className="flex1 column gap68 j_center product_text">
          <section className="gap24 column">
            <section className="gap12 column">
              <h1 className="heading heading2">
                {dia["dia"].split("@@Static@")[1]}
              </h1>

              <section className="">
                <h2 className="heading heading1">${product.price}</h2>
                <section className="align_end column">
                  <section
                    className="gap10 row"
                    onClick={() => {
                      setAr((ar = "Upload"));
                    }}
                  >
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
            <ProductLength
              ref={aLength}
              refValue={refValue}
              initialValue={
                history.state == null ? "" : cartQuantity[history.state]?.length
              }
            />
          </section>
          {dia["shop"] == "My Products" || dia["shop"] == "New Product" ? (
            ""
          ) : (
            <section className="row gap24 width100 product_buttons">
              <button
                className="row gap10 button button0 border white_bg width100"
                onClick={() => {
                  let Obj = {};
                  {
                    dataObject.map((e, i) => {
                      if (
                        e["length"] == parseInt(aLength?.current?.getState()) &&
                        e["image"] == aImages?.current?.getState() &&
                        e["id"] == par + "$starJet" + dia["dia"]
                      ) {
                        ///dataObject[i]["quantity"] = dataObject[i]["quantity"] + 1;
                        boolean = false;
                      }
                    });
                    if (boolean) {
                      Obj["length"] = parseInt(aLength?.current?.getState());
                      Obj["image"] = aImages?.current?.getState();
                      Obj["id"] = par + "$starJet" + dia["dia"];
                      history.state == null
                        ? (Obj["quantity"] = 1)
                        : (Obj["quantity"] = dataObject[history.state]["quantity"]);
                    }
                  }
                  boolean
                    ? history.state == null
                      ? (dataObject = dataObject.concat(Obj))
                      : (dataObject[history.state] = Obj)
                    : (boolean = true);
                  console.log(dataObject);
                       window.localStorage.setItem(
                         "productAstorage",
                         JSON.stringify(dataObject)
                       );
                }}
                ref={refValue}
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
        </section>
      </section>
      <section>
        {ar == "Upload" ? (
          <Overlay component={<UploadAr />} />
        ) : ar == "Ar" ? (
          <Overlay component={<Ar />} />
        ) : (
          ""
        )}
      </section>
    </>
  );
}
export default ProductA;
