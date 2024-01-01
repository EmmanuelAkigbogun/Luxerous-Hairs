import { NavLink } from "react-router-dom";
import files from "../assets/files";
function Hero() {
  return (
    <>
      <section className="hero gray row">
        <section className="hero_image_container">
          <img src={files.heroImage} alt="" className="hero_image" />
        </section>
        <section className="hero_text align_center">
          <section className="gap29 column">
            <h1 className="heading heading1 hero_heading">
              Meet Your Luxury Hair Dealer !
            </h1>
            <section className="hero_button_container">
              <NavLink
                className="row gap10 button black vw100 hero_button"
                to="Shop Our Bundles"
              >
                Shop Our Bundles <img src={files.arrowRight} alt="" />
              </NavLink>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default Hero;
