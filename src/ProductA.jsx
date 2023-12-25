import { NavLink, useLocation, useParams } from "react-router-dom";
import files from "./assets/files";
import data from "./assets/Bundles";
import { cartQuantity } from "./CartItems";
function ProductA() {
  let dataObject = [];
  let boolean = true;
  let Obj = {};
  let dia = useParams();
  let { par } = useParams();
  let location = useLocation();
  Obj["length"] = 10;
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
    total: a.reviews.length * 5,
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
      <section className="parent_section product_a gap68 row">
        <section className="flex1 gap24 row align_center product_images">
          <section className="product_scroll product_image_scroll">
            <section className="gap16 column j_center product_small_images">
              <img src={product.image} alt="" className="product_img_small" />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "violet" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "white" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "pink" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "orange" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "#007FFF" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "purple" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "gold" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "green" }}
              />
              <img
                src={product.image}
                alt=""
                className="product_img_small"
                style={{ background: "red" }}
              />
            </section>
          </section>
          <section className=" align_center width100">
            <img
              src={product.image}
              alt=""
              className="width100 product_img_large"
            />
          </section>
        </section>
        <section className="flex1 column gap68 j_center product_text">
          <section className="gap24 column">
            <section className="gap12 column">
              <h1 className="heading heading1">
                This is the title of the Hair
              </h1>

              <section className="">
                <h2 className="heading heading">${product.price}</h2>
                <section className="align_end column">
                  <section className="gap10 row">
                    <p className="paragraph paragraph1">Try Hair On with AR</p>
                    <img src={files.camera} alt="" />
                  </section>
                </section>
              </section>
              <section className="space_between">
                <section className="row gap4 review">
                  <img
                    src={
                      Number(starValue) > 0.5
                        ? files.blackStar
                        : files.whiteStar
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(starValue) > 1.5
                        ? files.blackStar
                        : files.whiteStar
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(starValue) > 2.5
                        ? files.blackStar
                        : files.whiteStar
                    }
                    alt=""
                  />
                  <img
                    src={
                      Number(starValue) > 3.5
                        ? files.blackStar
                        : files.whiteStar
                    }
                    alt=""
                  />
                  {
                    <img
                      src={
                        Number(starValue) > 4.5
                          ? files.blackStar
                          : files.whiteStar
                      }
                      alt=""
                    />
                  }
                  <p className="paragraph paragraph2">
                    {starValue}({product.review.length} Reviews)
                  </p>
                </section>
              </section>
            </section>
            <section className="gap8 column">
              <p className="paragraph paragraph2">Length</p>
              <section className="product_scroll">
                <section className="gap12 row nowrap">
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                </section>
              </section>
            </section>
          </section>
          <section className="row gap24 width100 product_buttons">
            <NavLink
              className="row gap10 button button0 border white_bg width100"
              onClick={() => {
                dataObject.map((e, i) => {
                  if (
                    e["length"] == 10 &&
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
              to={location.pathname}
            >
              <img src={files.bag} alt="a" />
              Add to Bag
            </NavLink>
            <NavLink
              to={`/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/My Cart/_Page_CartItems`}
              className="row gap10 button button0 black width100"
              onClick={() => {
                console.log(location, 990);
              }}
              state={dataObject}
            >
              Buy Now <img src={files.greaterArrow} alt="" />
            </NavLink>
          </section>
          {console.log(JSON.parse(JSON.stringify(dataObject)))}
        </section>
      </section>
    </>
  );
}
export default ProductA;
