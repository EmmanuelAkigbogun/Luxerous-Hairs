import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import PaginationWhite from "./General/PaginationWhite";
import files from "./assets/files";
let list = ["Shipping Details", "Delivery Method", "Payment"];
function PaymentProcess() {
  let { par } = useParams();
  let dia = useParams();
  let location = useLocation();
  let continiueButtonIndex =
    list.indexOf(
      list.filter((e) => {
        return location.pathname.replaceAll("%20", " ").endsWith("_Page_" + e);
      })[0]
    ) + 1;
  return (
    <>
      <PaginationWhite list={list} directory="/My Cart" />
      <form className="payment_process" id="form" name="form">
        <Outlet />
        <section className="j_end row">
          <section>
            {!location.pathname.endsWith("_Page_Payment") ? (
              <NavLink
                to={`/Shop Our Bundles/${par}/Product Name_Page/${
                  dia["dia"]
                }/My Cart/_Page_${
                  continiueButtonIndex == 0
                    ? list[1]
                    : list[continiueButtonIndex]
                }`}
                state={location.state}
                className="row gap10 button button0 black width100"
              >
                Continue <img src={files.greaterArrow} alt="right arrow" />
              </NavLink>
            ) : (
              ""
            )}
          </section>
        </section>
      </form>
    </>
  );
}
export default PaymentProcess;
