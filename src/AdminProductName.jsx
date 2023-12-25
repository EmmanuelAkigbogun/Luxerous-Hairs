import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import files from "./assets/files";
import PaginationWhite from "./General/PaginationWhite";
import AdminProductA from "./AdminProductA";
import { Location } from "./General/Location";
import AdminNewProduct from "./AdminNewProduct";
let list = ["Description", "Spec", "Review"];
let list1 = ["Description", "Spec"];
function AdminProductName() {
  let location = useLocation();
  let { shop } = useParams();
  return (
    <>
      <section className="gap24 column outlet_box100 log_out_mobile log_out_pad_product">
        {shop.includes("New Product") ? (
          ""
        ) : (
          <section className="space_between white_bg gap24 flex_wrap">
            <NavLink
              className={`gap10 align_center row_reverse j_end`}
              to={`/Admin/My%20Products`}
            >
              <p className={`paragraph paragraph1 nowrap paragraph_bold`}>
                Back
              </p>
              <img
                src={files.arrowDown}
                alt="right arrow"
                className={`icon deg90`}
              />
            </NavLink>
            <section className="row gap12 align_center">
              <p className="paragraph paragraph3">Manage Product</p>
              <NavLink
                className="black"
                to={`/Admin/My Products/View Analytics`}
                state={location.pathname}
              >
                <img src={files.trippleDotsWhite} alt="" />
              </NavLink>
            </section>
          </section>
        )}
        <section>
          {shop.includes("New Product") ? (
            <AdminNewProduct />
          ) : (
            <AdminProductA />
          )}
        </section>
        <section>
          <PaginationWhite
            list={shop.includes("New Product") ? list1 : list}
            directory=""
          />
          <section className="product_outlet_parent">
            <section className="product_outlet">
              <section className="product_outlet_child">
                <Outlet />
              </section>
              <section></section>
            </section>
            <section className="product_outlet_sibling"></section>
          </section>
        </section>
        {shop.includes("New Product") ? (
          <section className="space_between gap16 flex_wrap">
            <NavLink
              className="row gap10 button button0 border white_bg nowrap"
              to={"/Admin/Images"}
            >
              <img src={files.lesserArrow} alt="arrow" />
              Back
            </NavLink>
            <NavLink
              className="row gap10 button button0 black nowrap"
              to={"/Admin/Images"}
            >
              Complete
              <img src={files.greaterArrow} alt="arrow" />
            </NavLink>
          </section>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
export default AdminProductName;
