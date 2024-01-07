import {
  Outlet,
  NavLink,
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PaginationWhite from "./General/PaginationWhite";
let list = ["My Dashboard", "My Products", "My Orders", "Testimonials"];
let list1 = ["Description", "Images"];
import files from "./assets/files";
import Header from "./General/Header";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
function Admin() {
  let location = useLocation();
  let navigate = useNavigate();
  let selectList = location.pathname.split("/")[2];
  let { shop } = useParams();
  return (
    <>
      <Header bagBoolean={false} />
      <section className="parent_section">
        <section
          className={`page_band ${
            location.pathname.endsWith("Admin") ||
            location.pathname.replaceAll("%20", " ").endsWith("My Dashboard") ||
            location.pathname.replaceAll("%20", " ").endsWith("Testimonials")
              ? "outlet_box"
              : ""
          } row space_between whitish`}
          style={{ flexWrap: "wrap", flexShrink: "1%" }}
        >
          <h1 className="heading heading1">Admin</h1>
          {selectList == "Images" ||
          selectList == "Description" ||
          shop == "New Product" ? (
            ""
          ) : (
            <section className="row gap24 align_center">
              <NavLink className="row gap10 vw100 button button0 border white_bg width100 nowrap none">
                Manage Drawing
              </NavLink>
              <NavLink
                className="row gap10 button vw100 button0 black width100 nowrap wrap_end"
                to={"/Admin/Description"}
              >
                Add New Product
                <img src={files.greaterArrow} alt="arrow" />
              </NavLink>
            </section>
          )}
        </section>
        <PaginationWhite
          list={
            selectList == "Images" || selectList == "Description" ? list1 : list
          }
          directory="Admin"
        />
        <Outlet />
        <button
          className="log_out_pad no_bg no_border"
          onClick={async () => {
            await signOut(auth)
              .then((e) => console.log(e))
              .catch((err) => {
                console.log(err);
              });
              navigate("/Account")
          }}
        >
          <h3 className="heading heading3 heading3_small">Log Out</h3>
        </button>
      </section>
      {console.log(selectList)}
    </>
  );
}
export default Admin;
