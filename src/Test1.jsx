import { useState } from "react";
function Test1() {
  let Obj = {};
  Obj["length"] = String(Math.random()).slice(3, 5);
  Obj["quantity"] = 1;
  Obj["id"] = String(Math.random()).slice(3, 5);
  let [s, l] = useState([]);
  return (
    <>
      <section className="j_center after_nav">
        <button
          className="heading heading1 paragraph_bold"
          onClick={() => {
            l((s = s.concat(Obj)));
            console.log(
              `%c s = ${s}  , j` + String(Math.random()).slice(3, 5),
              "color:blue"
            );
            console.log(s);
          }}
        >
          add
        </button>
      </section>

      <section className="gap24 column">
        <section className="chart_items gap24 row">
          <img src={files.seller1} alt="" className="chart_items_image" />
          <section className="align_center width100">
            <section className="width100 column cart_items_text">
              <section className="gap12 column">
                <section className="gap24 space_between row chart_items_column600">
                  <h3 className="heading heading3_small">
                    Raw Straight Type 1
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
                      <button className="button3 paragraph paragraph2">
                        +
                      </button>
                      <p className="paragraph paragraph2">2</p>
                      <button className="button3 paragraph paragraph2">
                        -
                      </button>
                    </section>
                  </section>
                </section>
              </section>
              <section className="cart_items_end j_end">
                <section className="gap32 row">
                  <p className="paragraph paragraph1">Edit Item</p>
                  <p className="paragraph paragraph1">Remove Item</p>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="chart_items gap24 row">
          <img src={files.seller2} alt="" className="chart_items_image" />
          <section className="align_center width100">
            <section className="width100 column cart_items_text">
              <section className="gap12 column">
                <section className="gap24 space_between row chart_items_column600">
                  <h3 className="heading heading3_small">
                    Raw Straight Type 1
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
                      <button className="button3 paragraph paragraph2">
                        +
                      </button>
                      <p className="paragraph paragraph2">2</p>
                      <button className="button3 paragraph paragraph2">
                        -
                      </button>
                    </section>
                  </section>
                </section>
              </section>
              <section className="cart_items_end j_end">
                <section className="gap32 row">
                  <p className="paragraph paragraph1">Edit Item</p>
                  <p className="paragraph paragraph1">Remove Item</p>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="chart_items gap24 row">
          <img src={files.seller3} alt="" className="chart_items_image" />
          <section className="align_center width100">
            <section className="width100 column cart_items_text">
              <section className="gap12 column">
                <section className="gap24 space_between row chart_items_column600">
                  <h3 className="heading heading3_small">
                    Raw Straight Type 1
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
                      <button className="button3 paragraph paragraph2">
                        +
                      </button>
                      <p className="paragraph paragraph2">2</p>
                      <button className="button3 paragraph paragraph2">
                        -
                      </button>
                    </section>
                  </section>
                </section>
              </section>
              <section className="cart_items_end j_end">
                <section className="gap32 row">
                  <p className="paragraph paragraph1">Edit Item</p>
                  <p className="paragraph paragraph1">Remove Item</p>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      {console.log(location.state)}
    </>
  );
}
export default Test1;

