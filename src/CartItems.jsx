import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import data from "./assets/Bundles";
export let cartQuantity = [];
function CartItems() {
  let location = useLocation();
  let navigate = useNavigate();
  window.localStorage.getItem("productAstorage") != null
    ? JSON.parse(window.localStorage.getItem("productAstorage")).length === 0
      ? window.localStorage.removeItem("productAstorage")
      : (cartQuantity = JSON.parse(
          window.localStorage.getItem("productAstorage")
        ))
    : location.state == null
    ? ""
    : (cartQuantity = location.state);
  {
    cartQuantity.length == 0 ? console.log("no data") : "";
  }
  let dia = useParams();
  return (
    <>
      <section className="gap24 column">
        {cartQuantity.length == 0 ? (
          <>
            <h3 className="heading heading3">no item in cart</h3>
            <section className="width100">
              <button
                className="row gap10 button black button0"
                onClick={() => {
                  navigate("/Shop%20Our%20Bundles");
                }}
              >
                Start Shopping
              </button>
            </section>
          </>
        ) : (
          cartQuantity.map((e, i) => {
            // console.log(e["id"].split("$starJet")[0]);
            // console.log();
            return (
              <section
                className="cart_items gap24 row"
                key={String(Math.random()).slice(2, 8)}
              >
                <img
                  src={
                    data.filter(
                      (f) => f.text == e["id"].split("$starJet")[0]
                    )[0].content[
                      Number(e["id"].split("$starJet")[1].split("@@Static@")[0])
                    ].image
                  }
                  alt=""
                  className="cart_items_image"
                  key={String(Math.random()).slice(2, 8)}
                />
                <section className="align_center width100">
                  <section className="width100 column cart_items_text">
                    <section className="gap12 column">
                      <section className="gap24 space_between row cart_items_column600">
                        <h3 className="heading heading3_small">
                          {e["id"].split("$starJet")[0]}
                        </h3>
                        <h4 className="heading4">
                          $
                          {
                            data.filter(
                              (f) => f.text == e["id"].split("$starJet")[0]
                            )[0].content[
                              Number(
                                e["id"]
                                  .split("$starJet")[1]
                                  .split("@@Static@")[0]
                              )
                            ].price
                          }
                        </h4>
                      </section>
                      <section className="gap32 row fit_content wrap345">
                        <section className="column gap8">
                          <p className="paragraph paragraph_bold paragraph2">
                            Length
                          </p>
                          <button
                            className="button button2 black_white height100"
                            key={String(Math.random()).slice(2, 8)}
                          >
                            {e["length"]}"
                          </button>
                        </section>
                        <section className="column gap8">
                          <p className="paragraph paragraph_bold paragraph2">
                            Quantity
                          </p>
                          <section className="gap12 row">
                            <NavLink
                              className="button3 paragraph paragraph2"
                              onClick={() => {
                                cartQuantity[i]["quantity"] =
                                  cartQuantity[i]["quantity"] + 1;
                                window.localStorage.setItem(
                                  "productAstorage",
                                  JSON.stringify(cartQuantity)
                                );
                              }}
                              to=""
                              state={cartQuantity}
                            >
                              +
                            </NavLink>
                            <p
                              className="paragraph paragraph2"
                              key={String(Math.random()).slice(2, 8)}
                            >
                              {e["quantity"]}
                            </p>
                            <NavLink
                              className="button3 paragraph paragraph2"
                              onClick={() => {
                                cartQuantity[i]["quantity"] - 1 <= 0
                                  ? cartQuantity.splice(i, 1)
                                  : (cartQuantity[i]["quantity"] =
                                      cartQuantity[i]["quantity"] - 1);
                                window.localStorage.setItem(
                                  "productAstorage",
                                  JSON.stringify(cartQuantity)
                                );
                              }}
                              to=""
                              state={cartQuantity}
                            >
                              -
                            </NavLink>
                          </section>
                        </section>
                      </section>
                    </section>
                    <section className="cart_items_end j_end">
                      <section className="gap32 row wrap345">
                        <NavLink
                          className="paragraph paragraph1"
                          to={`/Shop Our Bundles/${
                            e["id"].split("$starJet")[0]
                          }/Product Name_Page/${e["id"].split("$starJet")[1]}`}
                        >
                          Edit Item
                        </NavLink>
                        <NavLink
                          className="paragraph paragraph1"
                          onClick={() => {
                            cartQuantity.splice(i, 1);
                            window.localStorage.setItem(
                              "productAstorage",
                              JSON.stringify(cartQuantity)
                            );
                          }}
                          to=""
                          state={cartQuantity}
                        >
                          Remove Item
                        </NavLink>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            );
          })
        )}
      </section>
      {console.log(location.state)}
    </>
  );
}
export default CartItems;
