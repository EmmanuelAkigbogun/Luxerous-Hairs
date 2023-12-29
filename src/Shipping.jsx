import files from "./assets/files";
function Shipping() {
  return (
    <>
      <section className="payment_process">
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="name">Name *</label>
            </section>
            <input
              id="name"
              name="namea"
              type="text"
              placeholder="Jane"
              className="contact_input input_border"
              autoComplete="true"
            />
          </section>
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="country">Country *</label>
            </section>
            <section className="select_input input_border">
              <select
                name="countryq"
                id="country"
                className="no_border contact_input1 white_bg width100"
              >
                <option value="d">Option</option>
                <option value="e">Nigeria</option>
                <option value="f">Canada</option>
                <option value="g">Algeria</option>
                <option value="h">Liberia</option>
              </select>
            </section>
          </section>
        </section>
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="address">Address Line 1</label>
            </section>
            <input
              id="address"
              name="addressq"
              type="text"
              placeholder="Jane"
              className="contact_input input_border"
            />
          </section>
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="state">State *</label>
            </section>
            <section className="select_input input_border">
              <select
                name="state"
                id="state"
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">Option</option>
                <option value="">Osun</option>
                <option value="">Ogun</option>
                <option value="">Abuja</option>
                <option value="">Imo</option>
              </select>
            </section>
          </section>
        </section>
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="names5">Address Line 1</label>
            </section>
            <input
              id="names5"
              type="text"
              placeholder="Jane"
              className="contact_input input_border"
            />
          </section>
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="names6">City *</label>
            </section>
            <section className="select_input input_border">
              <select
                name=""
                id="names6"
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">Option</option>
                <option value="">New York</option>
                <option value="">Vague</option>
                <option value="">Dark</option>
                <option value="">Gotham</option>
              </select>
            </section>
          </section>
        </section>
        <section className="gap12 row mobile_column">
          <section className="column gap4 width100 paragraph paragraph2">
            <section>
              <label htmlFor="names7">Zip code *</label>
            </section>
            <input
              id="names7"
              type="text"
              placeholder="Jane"
              className="contact_input input_border"
            />
          </section>
          <section className="column gap4 width100"></section>
        </section>
        <section className="j_end row">
          <section>
            <button
              className="row gap10 button button0 black width100"
              type="submit"
            >
              Continue <img src={files.greaterArrow} alt="right arrow" />
            </button>
          </section>
        </section>
      </section>
    </>
  );
}
export default Shipping;
