import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import files from "./assets/files";
function AdminNewProduct() {
  return (
    <>
      <section className="product_a gap24 row padding_none">
        <section className="flex1 gap24 row align_center product_images">
          <section className="product_scroll product_image_scroll">
            <section className="gap16 column j_center product_small_images">
              <img src={files.seller2} alt="" className="product_img_small" />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "violet" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "white" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "pink" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "orange" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "#007FFF" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "purple" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "gold" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "green" }}
              />
              <img
                src={files.seller2}
                alt=""
                className="product_img_small"
                style={{ background: "red" }}
              />
            </section>
          </section>
          <section className=" align_center width100">
            <img
              src={files.seller2}
              alt=""
              className="width100 product_img_large"
            />
          </section>
        </section>
        <section className="flex1 column gap68 j_center product_text">
          <section className="gap24 column">
            <section className="gap12 column">
              <h1 className="heading heading1">
                This is the title of the Hair
              </h1>

              <section className="">
                <h2 className="heading heading">$300</h2>
                <section className="align_end column">
                  <section className="gap10 row">
                    <p className="paragraph paragraph1">Try Hair On with AR</p>
                    <img src={files.camera} alt="" />
                  </section>
                </section>
              </section>
            </section>
            <section className="gap8 column">
              <p className="paragraph paragraph2">Length</p>
              <section className="product_scroll">
                <section className="gap12 row nowrap">
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                  <button className="button button2 white_bg border">
                    10″
                  </button>
                </section>
              </section>
            </section>
          </section>
          {console.log("log")}
        </section>
      </section>
    </>
  );
}
export default AdminNewProduct;

