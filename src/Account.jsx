import { Outlet, useNavigate } from "react-router-dom";
import PaginationWhite from "./General/PaginationWhite";
let list = ["Account Details", "Order Details"];
import Header from "./General/Header";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
function Account() {
    let navigate = useNavigate();
  return (
    <>
      <Header bagBoolean={true} />
      <section className="parent_section">
        <section className="page_band">
          <h1 className="heading heading1">My Account</h1>
        </section>
        <PaginationWhite list={list} directory="Account" />
        <Outlet />
        <button
          className="log_out_pad no_bg no_border"
          style={{marginTop:"30px"}}
          onClick={async () => {
            await signOut(auth)
              .then((e) => console.log(e))
              .catch((err) => {
                console.log(err);
              });
            navigate("/Account");
          }}
        >
          <h3 className="heading heading3 heading3_small">Log Out</h3>
        </button>
      </section>
    </>
  );
}
export default Account;
