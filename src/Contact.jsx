import files from "./assets/files";
import ContactForm from "./ContactForm";
function Contact() {
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
        <ContactForm />
      </section>
    </>
  );
}
export default Contact;
