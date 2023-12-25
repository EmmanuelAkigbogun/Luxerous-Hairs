import BlackCards from "./BlackCards";
import files from "./assets/files";
function AdminDashBoard() {
  return (
    <>
      <section className="outlet_box padding0 column log_out_mobile log_out_pad_dash white_bg">
        <section className="gap12 row mobile_column900">
          <section className="j_end flex1 align_center">
            <p className="paragraph paragraph2 paragraph_bold">View For:</p>
          </section>
          <section className="gap12 row flex1 mobile_column600">
            <section
              className="select_input input_border"
              style={{ width: "40%" }}
            >
              <select
                name=""
                id=""
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">7 days</option>
                <option value="">1 weeks</option>
                <option value="">2 weeks</option>
                <option value="">3 weeks</option>
                <option value="">2 month</option>
              </select>
            </section>
            <section className="select_input input_border width100">
              <select
                name=""
                id=""
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">Raw Straight Type 1</option>
                <option value="">Raw Straight Type 2</option>
                <option value="">Raw Straight Type 3</option>
                <option value="">Raw Straight Type 4</option>
                <option value="">Raw Straight Type 5</option>
                <option value="">Raw Straight Type 6</option>
              </select>
            </section>
          </section>
        </section>
        <section className="black_grids gap10 row">
          <BlackCards
            image={files.dollar}
            paragraph="Sales"
            heading="$2,000"
            width=""
          />
          <BlackCards
            image={files.orders}
            paragraph="Orders"
            heading="12"
            width=""
          />
          <BlackCards
            image={files.gridIcon}
            paragraph="Products"
            heading="32"
            width=""
          />
        </section>
        <section className="gap24 row mobile_column">
          <section className="card_padding16 align_center width100 padding0 whitish">
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
                    <section className="select_input input_border width100">
                      <select
                        name=""
                        id=""
                        className="no_border contact_input1 white_bg width100"
                      >
                        <option value="">1 years</option>
                        <option value="">2 years</option>
                      </select>
                    </section>
                    <section className="select_input input_border width100">
                      <select
                        name=""
                        id=""
                        className="no_border contact_input1 white_bg width100"
                      >
                        <option value="">Sales</option>
                        <option value="">Orders</option>
                        <option value="">Products</option>
                      </select>
                    </section>
                  </section>
                </section>
              </section>
              <section className="card_padding16 chart_image padding0">
                <img src={files.chart} alt="chart" className="width100" />
              </section>
            </section>
          </section>
          <section className="card_padding gap24 column whitish">
            <p className="paragraph paragraph0 paragraph_bold">
              Best Performing Products
            </p>
            <section className="gap16 column width100">
              <section className="gap12 row align_center white_bg">
                <img src={files.seller3} alt="" className="product_img_small" />
                <p className="paragraph paragraph2">
                  This is the name of the product 1
                </p>
              </section>
              <section className="gap12 row align_center white_bg">
                <img src={files.seller3} alt="" className="product_img_small" />
                <p className="paragraph paragraph2">
                  This is the name of the product 2
                </p>
              </section>
              <section className="gap12 row align_center white_bg">
                <img src={files.seller3} alt="" className="product_img_small" />
                <p className="paragraph paragraph2">
                  This is the name of the product 3
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default AdminDashBoard;
