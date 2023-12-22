import files from "./assets/files";
function Shipping() {
  return (
    <>
      <section className="gap12 row mobile_column">
        <section className="column gap4 width100 paragraph paragraph2">
          <section>
            <label htmlFor="names1">Name *</label>
          </section>
          <input
            id="names1"
            type="text"
            placeholder="Jane"
            className="contact_input input_border"
          />
        </section>
        <section className="column gap4 width100 paragraph paragraph2">
          <section>
            <label htmlFor="names2">Country *</label>
          </section>
          <select name="" id="names2" className="input_border contact_input white_bg">
            <option value="">Option</option>
            <option value="">Nigeria</option>
            <option value="">Canada</option>
            <option value="">Algeria</option>
            <option value="">Liberia</option>
          </select>
        </section>
      </section>
      <section className="gap12 row mobile_column">
        <section className="column gap4 width100 paragraph paragraph2">
          <section>
            <label htmlFor="names3">Address Line 1</label>
          </section>
          <input
            id="names3"
            type="text"
            placeholder="Jane"
            className="contact_input input_border"
          />
        </section>
        <section className="column gap4 width100 paragraph paragraph2">
          <section>
            <label htmlFor="names4">State *</label>
          </section>
          <select name="" id="names4" className="input_border contact_input white_bg">
            <option value="">Option</option>
            <option value="">Osun</option>
            <option value="">Ogun</option>
            <option value="">Abuja</option>
            <option value="">Imo</option>
          </select>
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
          <select name="" id="names6" className="input_border contact_input white_bg">
            <option value="">Option</option>
            <option value="">New York</option>
            <option value="">Vague</option>
            <option value="">Dark</option>
            <option value="">Gotham</option>
          </select>
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
    </>
  );
}
export default Shipping;
