import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import files from "./assets/files";
import { useRef, useState } from "react";
import AdminProductsAll from "./AdminProductsAll";
import AdminProductsBundles from "./AdminProductsBundles";
function AdminProducts() {
  // let [s, se] = useState("All");
  let navigate = useNavigate();
  let {par} = useParams();
  return (
    <>
      <section className="outlet_box100 gap40 column log_out_mobile log_out_pad_products">
        <section className="white_bg gap48 row mobile_column600">
          <section className="row gap8 search_container width100">
            <section className="width100 row">
              <input
                type="search"
                placeholder="Search Products"
                className="search_input search_input1"
              />
            </section>
            <section className="search_image_container black_search">
              <img src={files.search} alt="search" className="nav_icons" />
            </section>
          </section>
          <section className="select_input input_border">
            {console.log(par,"small")}
            <select
              onChange={(e) => {
                navigate(
                  e.target.value == ""
                    ? "/Admin/My Products"
                    : "/Admin/My Products/" + e.target.value + "/" + "_Page1"
                );
              }}
              value={par}
              className="no_border contact_input1 white_bg width100600"
            >
              <option value="">All</option>
              <option value="Raw Straight Type 1">Raw Straight Type 1</option>
              <option value="Raw Straight Type 2">Raw Straight Type 2</option>
              <option value="Raw Straight Type 3">Raw Straight Type 3</option>
              <option value="Raw Straight Type 4">Raw Straight Type 4</option>
              <option value="Raw Straight Type 5">Raw Straight Type 5</option>
              <option value="Raw Straight Type 6">Raw Straight Type 6</option>
              <option value="Raw Straight Type 7">Raw Straight Type 7</option>
              <option value="Raw Straight Type 8">Raw Straight Type 8</option>
              <option value="Raw Straight Type 9">Raw Straight Type 9</option>
            </select>
          </section>
        </section>
        {
          //console.log(s)
        }
        <Outlet />
        {
          //s == "All" ? <AdminProductsAll /> : <AdminProductsBundles s={s} />
        }
      </section>
    </>
  );
}
export default AdminProducts;
