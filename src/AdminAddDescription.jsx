import { useState } from "react";
import files from "./assets/files";
import { NavLink } from "react-router-dom";
function AdminAddDescription() {
  let [s, ss] = useState("");
  let [d, dd] = useState("");

  return (
    <>
      <section className="outlet_box padding0 column log_out_mobile log_out_pad_description">
        <section className="row gap24 mobile_column900">
          <section className="column gap24 flex1">
            <section className="card_padding16 gap16 column whitish">
              <h3 className="heading heading3_small">Description</h3>
              <section className="column gap4">
                <section>
                  <label htmlFor="name">Product Name *</label>
                </section>

                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="contact_input input_border"
                />
              </section>
              <section className="column gap4">
                <section>
                  <label htmlFor="description">Product Description *</label>
                </section>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Start Typing"
                  className="contact_input long_input input_border"
                ></textarea>
              </section>
            </section>
            <section className="card_padding16 gap16 column whitish">
              <h3 className="heading heading3_small">Specifications</h3>
              <section className="column gap4">
                <section>
                  <label htmlFor="weight">Weight *</label>
                </section>
                <input
                  id="weight"
                  type="text"
                  placeholder="Weight"
                  className="contact_input input_border"
                />
              </section>
              <section className="column gap4">
                <section>
                  <label htmlFor="length">Length *</label>
                </section>
                <input
                  id="length"
                  type="text"
                  placeholder="Length"
                  className="contact_input input_border"
                />
              </section>
            </section>
          </section>
          <section className="column gap24 flex1">
            <section className="card_padding16 gap16 column whitish">
              <h3 className="heading heading3_small">Collection</h3>
              <section className="column gap4">
                <section>
                  <label htmlFor="option">Collection *</label>
                </section>
                <section className="width100 row input_border gap10 align_center contact_input2 white_bg">
                  <input
                    id="option"
                    type="text"
                    placeholder="Option"
                    value={d}
                    onChange={(e) => {
                      dd((d = e.target.value));
                    }}
                    className="width100 no_border contact_input1"
                  />
                  <select
                    name=""
                    id=""
                    className="no_border white_bg icon"
                    onChange={(e) => {
                      dd((d = e.target.value));
                      ss((s = ""));
                    }}
                    value={s}
                  >
                    <option value=""></option>
                    <option value="Raw Straight Type 1">
                      Raw Straight Type 1
                    </option>
                    <option value="Raw Straight Type 2">
                      Raw Straight Type 2
                    </option>
                    <option value="Raw Straight Type 3">
                      Raw Straight Type 3
                    </option>
                    <option value="Raw Straight Type 4">
                      Raw Straight Type 4
                    </option>
                    <option value="Raw Straight Type 5">
                      Raw Straight Type 5
                    </option>
                    <option value="Raw Straight Type 6">
                      Raw Straight Type 6
                    </option>
                  </select>
                </section>
              </section>
            </section>
            <section className="card_padding16 gap16 column whitish">
              <h3 className="heading heading3_small">Pricing</h3>
              <section className="column gap4">
                <section>
                  <label htmlFor="price">Price *</label>
                </section>
                <input
                  id="price"
                  type="text"
                  placeholder="$0"
                  className="contact_input input_border"
                />
              </section>
              <section className="column gap4">
                <section>
                  <label htmlFor="percentage">Percentage *</label>
                </section>
                <input
                  id="percentage"
                  type="text"
                  placeholder="Length"
                  className="contact_input input_border"
                />
              </section>
            </section>
            <section className="card_padding16 gap16 column whitish">
              <h3 className="heading heading3_small">Availability</h3>
              <section className="row gap16 gap16 flex_wrap">
                <section className="check_on check_button row">
                  <section className="check_left_on j_end align_center flex1">
                    <img
                      src={files.checked}
                      alt="check"
                      className="check_left_image"
                    />
                  </section>
                  <section className="check_right_on align_center flex1"></section>
                </section>
                {
                  //<img src={files.disabled} alt="enabled" />
                }
                <p className="paragraph paragraph2 paragraph_bold">
                  This product is available for sale
                </p>
              </section>
            </section>
          </section>
        </section>
        <section className="space_between gap16 flex_wrap">
          <NavLink className="row gap10 button button0 border white_bg nowrap">
            <img src={files.lesserArrow} alt="arrow" />
            Back
          </NavLink>
          <NavLink
            className="row gap10 button button0 black nowrap"
            to={"/Admin/Images"}
          >
            Next
            <img src={files.greaterArrow} alt="arrow" />
          </NavLink>
        </section>
      </section>
    </>
  );
}
export default AdminAddDescription;
