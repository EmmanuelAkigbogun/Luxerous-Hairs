import { useLocation, useParams } from "react-router-dom";
import data from "./assets/Bundles";
import { cartQuantity } from "./CartItems";
function StarCalc() {
  let dataObject = [];
  let Obj = {};
  let dia = useParams();
  let { par } = useParams();
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
  return <>{[a, product]}</>;
}
export default StarCalc;
