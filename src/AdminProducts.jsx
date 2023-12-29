import { NavLink } from "react-router-dom";
import files from "./assets/files";
import { useRef, useState } from "react";
import { Grid } from "./General/Grid";
import data from "../src/assets/Bundles";
function AdminProducts() {
  let [s, se] = useState("Raw Straight Type 1");
  let k = 4;
  let n = 0;
  let m = 0;
  return (
    <>
      <section className="outlet_box100 gap24 column log_out_mobile log_out_pad_products">
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
            <select
              onChange={(e) => {
                se((s = e.target.value));
              }}
              className="no_border contact_input1 white_bg width100600"
            >
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
        {console.log(s)}
        <section>
          <h4 className="heading heading4">Best Sellers</h4>
          <Grid
            data={data
              .filter((f) => f.text == "Shop Best Sellers")[0]
              .content.slice(0, 4)}
            bundlename="Shop Best Sellers"
            n={0}
            m={0}
          />
        </section>
        <section>
          <h4 className="heading heading4">Others</h4>
          {data.slice(0, 3).map((e, i) => {
            return (
              <Grid
                data={data
                  .filter((f) => f.text == s)[0]
                  .content.slice(n + k * i, n + k * (i + 1))}
                key={String(Math.random()).slice(2, 8)}
                bundlename={s}
                n={n}
                m={m}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
export default AdminProducts;
