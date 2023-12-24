import files from "./assets/files";
import { NavLink, useLocation, useParams } from "react-router-dom";
import data from "./assets/Bundles";
let cartData = [];
function OrderSummary() {
  let location = useLocation();
  let { par } = useParams();
  let dia = useParams();
  let counter = 0;
  let priceData = 0;

  window.localStorage.getItem("productAstorage") != null
    ? JSON.parse(window.localStorage.getItem("productAstorage")).length === 0
      ? window.localStorage.removeItem("productAstorage")
      : (cartData = JSON.parse(window.localStorage.getItem("productAstorage")))
    : location.state == null
    ? ""
    : (cartData = location.state);
  let items = cartData.map((e) => (counter = counter + Number(e["quantity"])));
  let subTotal = cartData.map((e) => {
    return (priceData =
      priceData +
      Number(
        data.filter((f) => f.text == e["id"].split("$starJet")[0])[0].content[
          Number(e["id"].split("$starJet")[1].split("@@Static@")[0])
        ].price * e["quantity"]
      ));
  });
  let tax = (priceData * 5) / 100;
  let totalPrice = priceData + tax;
  return (
    <>
      <section className="gray ordersummary">
        {console.log(subTotal, 88)}
        <section className="column gap48">
          <section className="row space_between flex_wrap gap8">
            <h4 className="heading heading4">Order Summary</h4>
            <p className="paragraph paragraph0">
              (
              {
                counter
                //cartQuantity.length
              }{" "}
              Items)
            </p>
          </section>
          <section className="gap24 column">
            <section className="gap12 column">
              <section className="row gap52">
                <p className="paragraph0 paragraph">Sub Total:</p>
                <p className="paragraph0 paragraph">${priceData}</p>
              </section>
              <section className="row gap61">
                <p className="paragraph0 paragraph">Delivery:</p>
                <p className="paragraph0 paragraph">To be added at checkout</p>
              </section>
              <section className="row gap100">
                <p className="paragraph0 paragraph">Tax:</p>
                <p className="paragraph0 paragraph">${tax}</p>
              </section>
            </section>
            <section className="gap12 column">
              <section className="gap85 row">
                <p className="paragraph0 paragraph paragraph_bold">Total:</p>
                <p className="paragraph0 paragraph paragraph_bold">
                  ${totalPrice}
                </p>
              </section>
              <section>
                <p className="paragraph0 paragraph">
                  *This is minus your delivery fee. Delivery fee would be added
                  at checkout
                </p>
              </section>
            </section>
          </section>
        </section>
        {location.pathname.endsWith("_Page_CartItems") ||
        location.pathname.endsWith("_Page_Payment") ? (
          <NavLink
            to={
              location.pathname.endsWith("_Page_CartItems")
                ? location.pathname.replace("/_Page_CartItems", "")
                : location.pathname
            }
            className="row gap10 button button0 black width100"
            state={cartData}
          >
            {location.pathname.endsWith("_Page_CartItems") ? (
              <img src={files.sheildTick} alt="" />
            ) : (
              `Pay $${totalPrice}`
            )}
            {location.pathname.endsWith("_Page_CartItems") ? (
              `Secure Checkout`
            ) : (
              <img src={files.greaterArrow} alt="" />
            )}
          </NavLink>
        ) : (
          ""
        )}
      </section>
      {console.log(cartData)}
    </>
  );
}
export default OrderSummary;
