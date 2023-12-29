import { NavLink } from "react-router-dom";
import files from "../assets/files";
let list = [
  "Raw Straight Type 1",
  "Raw Straight Type 2",
  "Raw Straight Type 3",
  "Raw Straight Type 4",
  "Raw Straight Type 5",
  "Raw Straight Type 6",
];
function Footer() {
  return (
    <>
      <footer className="parent_section footer">
        <section className="gap32 column footer_child1">
          <section className="gap8 column">
            <NavLink
              className="heading heading3"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
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
            {list.map((e) => {
              return (
                <NavLink
                  key={e}
                  className="paragraph pragraph2"
                  to={`/Shop%20Our%20Bundles/${e}/_Page1`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  {e}
                </NavLink>
              );
            })}
          </section>
        </section>
        <section className="gap14 column">
          <p className="paragraph paragraph0 paragraph_bold footer_paragraph">
            Company
          </p>
          <section className="column gap12">
            <p className="paragraph pragraph2"> Take Home Care</p>
            <p className="paragraph pragraph2">Shipping Policy</p>
            <NavLink
              to="/Contact Us"
              className="paragraph paragraph2"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
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
