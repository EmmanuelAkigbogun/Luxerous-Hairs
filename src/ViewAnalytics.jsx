import files from "./assets/files";
import { NavLink, useLocation } from "react-router-dom";
import BlackCards from "./BlackCards";
function ViewAnalytics() {
  let location = useLocation();
  return (
    <>
      <section className="outlet_box70 column">
        <section className="space_between white_bg gap24 flex_wrap">
          <NavLink
            className={`gap10 align_center row_reverse j_end`}
            to={location.state}
          >
            <p className={`paragraph paragraph1 nowrap paragraph_bold`}>Back</p>
            <img
              src={files.arrowDown}
              alt="right arrow"
              className={`icon deg90`}
            />
          </NavLink>
          <section className="row gap12 align_center">
            <p className="paragraph paragraph3">Manage Product</p>
            <button className="black">
              <img src={files.trippleDotsWhite} alt="" />
            </button>
          </section>
        </section>
        <section className="black_grids gap10 row">
          <BlackCards
            image={files.dollar}
            paragraph="Sales"
            heading="$2,000"
            width="width100"
          />
          <BlackCards
            image={files.orders}
            paragraph="Orders"
            heading="12"
            width="width100"
          />
        </section>
        <section className="card_padding16 align_center width100 padding0">
          <section className="gap16 column width100 padding0">
            <section className="space_between mobile_column900">
              <p className="paragraph paragraph0 paragraph_bold align_center">
                Analytics
              </p>
              <section className="gap12 row mobile_column375">
                <section className="align_center">
                  <p className="paragraph paragraph2 paragraph_bold">Show:</p>
                </section>
                <section className="gap12 row flex1 mobile_column375">
                  <select
                    name=""
                    id=""
                    className="input_border contact_input white_bg"
                  >
                    <option value="">1 years</option>
                    <option value="">2 years</option>
                  </select>
                  <select
                    name=""
                    id=""
                    className="input_border contact_input white_bg width100"
                  >
                    <option value="">Sales</option>
                    <option value="">Orders</option>
                    <option value="">Products</option>
                  </select>
                </section>
              </section>
            </section>
            <section className="card_padding16 chart_image padding0">
              <img src={files.chart} alt="chart" className="width100" />
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default ViewAnalytics;
