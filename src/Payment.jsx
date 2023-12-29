import { useState } from "react";
import files from "./assets/files";
function Payment() {
  let handleClick = (e) => {
    setcheck((check = e.target.htmlFor));
  };
  let [check, setcheck] = useState("p1");
  return (
    <>
      <section className="payment_process">
        <section className="gap12 row">
          <section className="align_center">
            <label htmlFor="p1" className="label" onClick={handleClick}>
              <p className={check == "p1" ? "label_child" : ""}></p>
            </label>
          </section>
          <section>
            <h3 className="heading3 heading">Pay with Paypal</h3>
          </section>
        </section>
        <section className="gap12 row">
          <section className="align_center">
            <label htmlFor="p2" className="label" onClick={handleClick}>
              <p className={check == "p2" ? "label_child" : ""}></p>
            </label>
          </section>
          <section>
            <h3 className="heading3 heading">Pay with Card</h3>
            <section className="gap4 row wrap345">
              <img src={files.pay1} alt="pay card" />
              <img src={files.pay2} alt="pay card" />
              <img src={files.pay3} alt="pay card" />
              <img src={files.pay4} alt="pay card" />
            </section>
          </section>
        </section>
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="namep1">Card Number *</label>
            </section>
            <input
              id="namep1"
              name="namep1"
              type="text"
              placeholder="1111"
              className="contact_input input_border"
            />
          </section>
          <section className="column gap4 widt100"></section>
        </section>
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="namep2">Expiry Date *</label>
            </section>
            <input
              id="namep2"
              name="namep2"
              type="text"
              placeholder="10/24"
              className="contact_input input_border"
            />
          </section>
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="namep3">CVC *</label>
            </section>
            <input
              id="namep3"
              name="namep3"
              type="text"
              placeholder="123"
              className="contact_input input_border"
            />
          </section>
        </section>
        <section className="none">
          <input type="radio" name="p" id="p1" value="p1" defaultChecked />
          <input type="radio" name="p" id="p2" value="p2"/>
        </section>
        <section className="dialogue">
          <section>
            <section></section>
            <section></section>
          </section>
        </section>
      </section>
    </>
  );
}
export default Payment;
