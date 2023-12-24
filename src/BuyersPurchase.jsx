import { Outlet } from "react-router-dom";
import { Location } from "./General/Location";
function BuyersPurchase() {
  return (
    <>
      <section className="whitish">
        <Location />
        <Outlet/>
      </section>
    </>
  );
}
export default BuyersPurchase;
