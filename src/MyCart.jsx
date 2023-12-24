import { Outlet} from "react-router-dom";
import OrderSummary from "./OrderSummary";
function MyCart() {
  return (
    <>
      <section className="my_cart parent_section">
        <section className="cart_outlet">
          <Outlet />
        </section>
        <section className="cart_outlet_sibling">
          <OrderSummary/>
        </section>
      </section>
    </>
  );
}
export default MyCart;
