import { Outlet } from "react-router-dom";
function OrderDetails() {
  return (
    <>
      <section className="column outlet_box white_bg">
        <Outlet />
      </section>
    </>
  );
}
export default OrderDetails;
