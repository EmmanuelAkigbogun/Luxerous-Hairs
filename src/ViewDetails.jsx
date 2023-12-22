import { NavLink } from "react-router-dom";
import files from "./assets/files";
function ViewDetails({ pathName }) {
  return (
    <>
      <section>
        {console.log(pathName, 9997)}
        <section className={`gap24 column_reverse white_bg`}>
          <NavLink
            className={`gap10 align_center row_reverse j_end`}
            to={
              pathName == "" ? `/Account/Order Details` : "/Admin/My%20Orders"
            }
          >
            <p className={`paragraph paragraph1 nowrap paragraph_bold`}>Back</p>
            <img
              src={files.arrowDown}
              alt="right arrow"
              className={`icon deg90`}
            />
          </NavLink>
        </section>
      </section>
      {pathName == "" ? (
        ""
      ) : (
        <section className="space_between white_bg gap24 wrap345">
          <h3 className="heading heading3_small align_center flex_wrap">
            Order Summary
          </h3>
          <section className="row gap12 align_center update_tracking_parent wrap345">
            <p className="paragraph paragraph3 update_tracking nowrap">
              Update Tracking
            </p>
            <button className="black">
              <img src={files.trippleDotsWhite} alt="" />
            </button>
          </section>
        </section>
      )}
      {pathName === "" ? (
        <section className="gap10 row width100 none mobile_show">
          <NavLink className="row gap10 button button0 border white_bg width100">
            Leave Review
          </NavLink>
          <NavLink className="row gap10 button button0 black width100">
            Buy Again
          </NavLink>
        </section>
      ) : (
        ""
      )}
      <section className="gap16 row mobile_column">
        <section className="column gap16 flex1">
          {" "}
          <section className="cart_items1 gap24 row">
            <img src={files.seller1} alt="" className="cart_items_image1" />
            <section className="align_center width100">
              <section className="width100 column cart_items_text">
                <section className="gap12 column">
                  <section className="gap24 space_between row cart_items_column600">
                    <h3 className="heading heading3_small">
                      This is the title of the Hair
                    </h3>
                    <h4 className="heading4">$70</h4>
                  </section>
                  <section className="gap32 row fit_content">
                    <section className="column gap8">
                      <p className="paragraph paragraph_bold paragraph2">
                        Length
                      </p>
                      <button className="button button2 black_white height100">
                        10"
                      </button>
                    </section>
                    <section className="column gap8">
                      <p className="paragraph paragraph_bold paragraph2">
                        Quantity
                      </p>
                      <section className="gap12 row">
                        <p className="paragraph paragraph2">2</p>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section className="delivery_status">
            <p className="paragraph paragraph0">Product Delivered:</p>
            <p className="paragraph paragraph0 paragraph_bold">
              Tuesday, 20th of August 2023
            </p>
          </section>
          <section>
            <section className="row gap8">
              <section
                className="column align_center"
                style={{ justifyContent: "stretch" }}
              >
                <img src={files.circleCheck} alt="" />
                <img src={files.line} alt="" />
              </section>
              <section className="view_details_padding28">
                <section className="gap8 column">
                  <p className="paragraph paragraph2 paragraph_bold">
                    Lorem ipsum dolor
                  </p>
                  <p className="paragraph paragraph3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </section>
              </section>
            </section>
            <section className="row gap8">
              <section
                className="column align_center"
                style={{ justifyContent: "stretch" }}
              >
                <img src={files.circleCheck} alt="" />
                <img src={files.line} alt="" />
              </section>
              <section>
                <section className="view_details_padding28">
                  <section className="gap8 column">
                    <p className="paragraph paragraph2 paragraph_bold">
                      Lorem ipsum dolor
                    </p>
                    <p className="paragraph paragraph3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </section>
                </section>
              </section>
            </section>
            <section className="row gap8">
              <section className="column align_center">
                <img src={files.circleCheck} alt="" />
                <img
                  src={files.line}
                  alt=""
                  style={{ justifyContent: "stretch" }}
                />
              </section>
              <section>
                <section className="view_details_padding28">
                  <section className="gap8 column">
                    <p className="paragraph paragraph2 paragraph_bold">
                      Lorem ipsum dolor
                    </p>
                    <p className="paragraph paragraph3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="flex1 gap16 column">
          {pathName === "" ? (
            <section className="gap10 row width100 mobile_hide">
              <NavLink className="row gap10 button button0 border white_bg width100">
                Leave Review
              </NavLink>
              <NavLink className="row gap10 button button0 black width100">
                Buy Again
              </NavLink>
            </section>
          ) : (
            ""
          )}
          <section className="gap8 column view_details_padding16">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Payment Details
              </p>
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">Card</p>
              <section className="gap8 column">
                <p className="paragraph paragraph2">XXXX XXXX XXXX 0000</p>
                <p className="paragraph paragraph2">10/24</p>
                <p className="paragraph paragraph2">XXX</p>
              </section>
            </section>
          </section>
          <section className="gap8 view_details_padding16 column">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Shipping Address
              </p>
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                Default Address
              </p>
              <section className="gap8 column">
                <p className="paragraph paragraph2">Jane Doe</p>
                <p className="paragraph paragraph2">124 Porter Road</p>
                <p className="paragraph paragraph2">Country</p>
                <p className="paragraph paragraph2">State</p>
                <p className="paragraph paragraph2">Zip Code</p>
                <p className="paragraph paragraph2">City</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default ViewDetails;
