import { Outlet, useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";
function MyCart() {
  let location = useLocation();
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
    {
      location.pathname.endsWith("Details")
        ? navigate(
            location.pathname.replace(
              "_Page_Shipping%20Details",
              "_Page_Delivery%20Method"
            ),
            { state: location.state }
          )
        : location.pathname.endsWith("Method")
        ? navigate(
            location.pathname.replace(
              "_Page_Delivery%20Method",
              "_Page_Payment"
            ),
            { state: location.state }
          )
        : location.pathname.endsWith("Payment")
        ? navigate(location.pathname, { state: location.state })
        : "";
    }
  }

  return (
    <>
      <form className="my_cart parent_section" onSubmit={handleSubmit}>
        <section className="cart_outlet">
          <Outlet />
        </section>
        <section className="cart_outlet_sibling">
          <OrderSummary />
          {console.log("hello")}
        </section>
      </form>
    </>
  );
}
export default MyCart;
