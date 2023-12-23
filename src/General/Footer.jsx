import { NavLink } from "react-router-dom";
import files from "../assets/files";
function Footer() {
  return (
    <>
      <footer className="parent_section footer">
        <section className="gap32 column footer_child1">
          <section className="gap8 column">
            <NavLink className="heading heading3">
              <h3>Luxurious Hair</h3>
            </NavLink>
            <p className="paragraph pragraph2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per
            </p>
          </section>
          <section className="row gap16">
            <img src={files.instagram} alt="instagram" />
            <img src={files.tikTok} alt="tik-tok" />
          </section>
          <p className="rubik">Ⓒ Company. All rights reserved.</p>
        </section>
        <section className="gap14 column">
          <p className="paragraph paragraph0 paragraph_bold footer_paragraph">
            Bundles
          </p>
          <section className="column gap12">
            <p className="paragraph pragraph2">Bundles 1</p>
            <p className="paragraph pragraph2">Bundles 2</p>
            <p className="paragraph pragraph2">Bundles 3</p>
            <p className="paragraph pragraph2">Bundles 4</p>
            <p className="paragraph pragraph2"> Bundles 5</p>
          </section>
        </section>
        <section className="gap14 column">
          <p className="paragraph paragraph0 paragraph_bold footer_paragraph">
            Company
          </p>
          <section className="column gap12">
            <p className="paragraph pragraph2"> Take Home Care</p>
            <p className="paragraph pragraph2">Shipping Policy</p>
            <NavLink to="/Contact Us" className="paragraph paragraph2">
              Contact Us
            </NavLink>
            <p className="paragraph pragraph2">Terms and Conditions</p>
            <p className="paragraph pragraph2">Privacy Policy</p>
          </section>
        </section>
      </footer>
    </>
  );
}
export default Footer;
