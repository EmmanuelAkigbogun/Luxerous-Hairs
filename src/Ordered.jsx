import { NavLink } from "react-router-dom";
import files from "./assets/files";
function Ordered() {
  return (
    <>
      <section className="white_bg  ordered">
        <section className="card_padding16 column gap12">
          <section className="space_between gap12">
            <p className="parahraph paragraph0">
              Your Order has been placed successfully.
            </p>
            <img src={files.close} alt="" className="icon" />
          </section>
          <section className="j_end gap12 row">
            <NavLink className="row gap10 button button0 border white_bg width100">
              Leave Review
            </NavLink>
            <NavLink className="row gap10 button button0 black width100">
              Buy Again
            </NavLink>
          </section>
        </section>
      </section>
    </>
  );
}
export default Ordered;
