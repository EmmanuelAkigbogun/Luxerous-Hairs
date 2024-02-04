import { useRef } from "react";
import files from "./assets/files";
import InputField from "./InputField";
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
        <InputField
          labelValue="Name"
          forValue="name"
          nameValue="name"
          placeholder="jane"
          typeValue="text"
          classValue=""
        />
        <InputField
          labelValue="Email"
          forValue="email"
          nameValue="email"
          placeholder="janejennygmail.com"
          typeValue="email"
          classValue=""
        />
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
        <InputField
          labelValue="Message"
          forValue="message"
          nameValue="message"
          placeholder="Start Typing"
          typeValue="text"
          classValue="long_input"
        />
      </section>


      <button className="row gap10 button black contact_button">
        Send Message <img src={files.arrowRight} alt="" />
      </button>
    </form>
  );
}
export default ContactForm;
