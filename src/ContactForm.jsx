import { useRef } from "react";
import files from "./assets/files";
function ContactForm() {
  let ref = useRef(null);
  let handleFocus = () => {
    ref.current.focus();
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <form
      className="column gap24 flex2 white_bg contact_form"
      onSubmit={handleSubmit}
    >
      <h3 className="heading3 heading">Send Us a Message</h3>
      <section className="column gap12">
        <section className="column gap4">
          <section>
            <label htmlFor="name">Name *</label>
          </section>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jane"
            className="contact_input input_border"
          />
        </section>
        <section className="column gap4">
          <section>
            <label htmlFor="email">Email *</label>
          </section>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="janejennygmail.com"
            className="contact_input input_border"
          />
        </section>
        <section className="column gap4">
          <section>
            <label htmlFor="phone">Phone Number *</label>
          </section>
          <section
            className="row gap12 input_border"
            tabIndex="0"
            onFocus={handleFocus}
          >
            <select
              name="country_phone"
              id="country_phone"
              className="no_border contact_input white_bg"
            >
              <option value="">+1</option>
              <option value="">+123</option>
              <option value="">+001</option>
              <option value="">+443</option>
              <option value="">+222</option>
            </select>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="00000000"
              className="width100 no_border"
              ref={ref}
            />
          </section>
        </section>
        <section className="column gap4">
          <section>
            <label htmlFor="message">Message *</label>
          </section>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Start Typing"
            className="contact_input long_input input_border"
          ></textarea>
        </section>
      </section>
      <button className="row gap10 button black contact_button">
        Send Message <img src={files.arrowRight} alt="" />
      </button>
    </form>
  );
}
export default ContactForm;
