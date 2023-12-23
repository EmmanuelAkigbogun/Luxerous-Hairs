import { useRef } from "react";
import files from "./assets/files";
import { useLocation } from "react-router-dom";
function Contact() {
  let ref = useRef(null);
  let d = useLocation();
  let handleFocus = () => {
    () => {
      ref.current.focus();
    };
  };
  return (
    <>
      <section className="contact row gap200">
        <section className="align_center flex1">
          <section className="column   gap48">
            <section className="gap24 column">
              <section className="gap24 row">
                <section className="align_center">
                  <img src={files.sms} alt="sms" />
                </section>
                <section className="column">
                  <h4 className="heading heading3_small">Email Us</h4>
                  <p className="paaragraph paragraph2">
                    Contact@luxurioushairs.com
                  </p>
                </section>
              </section>
              <section className="gap24 row">
                <section className="align_center">
                  <img src={files.call} alt="call" />
                </section>
                <section className="column">
                  <h4 className="heading heading3_small">Call Us</h4>
                  <p className="paaragraph paragraph2">77777777777777</p>
                </section>
              </section>
              <section className="gap24 row">
                <section className="align_center">
                  <img src={files.location} alt="location" />
                </section>
                <section className="column">
                  <h4 className="heading heading3_small">Location</h4>
                  <p className="paaragraph paragraph2">Here’s the Address</p>
                </section>
              </section>
              <section className="gap24 row">
                <section className="align_center">
                  <img src={files.clock} alt="clock" />
                </section>
                <section className="column">
                  <h4 className="heading heading3_small">Opening Hours</h4>
                  <p className="paaragraph paragraph2">MON-SAT: 10AM - 6PM</p>
                </section>
              </section>
            </section>
            <section className="gap24 row wrap345 j_center">
              <img src={files.facebook} alt="" />
              <img src={files.instagram1} alt="" />
              <img src={files.twitter} alt="" />
            </section>
          </section>
        </section>
        <form className="column gap24 flex2 white_bg contact_form">
          <h3 className="heading3 heading">Send Us a Message</h3>
          <section className="column gap12">
            <section className="column gap4">
              <section>
                <label htmlFor="name">Name *</label>
              </section>
              <input
                id="name"
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
                <select name="" id="country_phone" className="no_border contact_input white_bg">
                  <option value="">+1</option>
                  <option value="">+123</option>
                  <option value="">+001</option>
                  <option value="">+443</option>
                  <option value="">+222</option>
                </select>
                <input
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
      </section>
      {console.log(d)}
    </>
  );
}
export default Contact;
