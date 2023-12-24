import { Outlet } from "react-router-dom";
import PaginationWhite from "./General/PaginationWhite";
let list = ["Account Details", "Order Details"];
import Header from "./General/Header";
function Account() {
  return (
    <>
      <Header bagBoolean={true} />
      <section className="parent_section">
        <section className="page_band">
          <h1 className="heading heading1">My Account</h1>
        </section>
        <PaginationWhite list={list} directory="Account" />
        <Outlet />
        <section>
          <h3 className="heading heading3 heading3_small">Log Out</h3>
        </section>
      </section>
    </>
  );
}
export default Account;
