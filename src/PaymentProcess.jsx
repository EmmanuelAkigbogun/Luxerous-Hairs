import { Outlet} from "react-router-dom";
import PaginationWhite from "./General/PaginationWhite";
let list = ["Shipping Details", "Delivery Method", "Payment"];
function PaymentProcess() {
  return (
    <>
      <PaginationWhite list={list} directory="My Cart" />
        <Outlet />
    </>
  );
}
export default PaymentProcess;
