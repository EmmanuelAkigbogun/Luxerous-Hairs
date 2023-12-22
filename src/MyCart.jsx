import { Outlet, useLocation } from "react-router-dom";
import OrderSummary from "./OrderSummary";
function MyCart() {
  let locatio=useLocation()
  return (
    <>
      <section className="my_cart parent_section">
        <section className="cart_outlet">
          <Outlet />
        </section>
        <section className="cart_outlet_sibling">
          <OrderSummary locatio={locatio}/>
        </section>
        {console.log(locatio,78)}
      </section>
    </>
  );
}
export default MyCart;
