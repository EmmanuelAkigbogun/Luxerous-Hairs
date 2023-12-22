import { useState } from "react";
function Delivery() {
  let handleClick = (e) => {
    setcheck((check = e.target.htmlFor));
  };
  let [check, setcheck] = useState("d1");
  return (
    <>
      <section className="gap12 row">
        <section className="align_center">
          <label htmlFor="d1" className="label" onClick={handleClick}>
            <p className={check == "d1" ? "label_child" : ""}></p>
          </label>
        </section>
        <section>
          <h3 className="heading3 heading">Method 1</h3>
          <p className="paragraph paragraph2">
            Get your order between 3 - 5 days
          </p>
          <p className="paragraph paragraph2">
            Shipping Fee:
            <span className="paragraph_bold"> $70</span>
          </p>
        </section>
      </section>
      <section className="gap12 row">
        <section className="align_center">
          <label htmlFor="d2" className="label" onClick={handleClick}>
            <p className={check == "d2" ? "label_child" : ""}></p>
          </label>
        </section>
        <section>
          <h3 className="heading3 heading">Method 2</h3>
          <p className="paragraph paragraph2">
            Get your order between 7 - 10 days
          </p>
          <p className="paragraph paragraph2">
            Shipping Fee:
            <span className="paragraph_bold"> $20</span>
          </p>
        </section>
      </section>
      <section className="none">
        <input type="radio" name="d" id="d1" />
        <input type="radio" name="d" id="d2" />
      </section>
    </>
  );
}
export default Delivery;
