import { SectionBChild } from "./Home/SectionBChild";
import { NavLink } from "react-router-dom";
import files from "./assets/files";
function PreviewTestimonials() {
  return (
    <>
      <section className="gap32 column">
        <section>
          <SectionBChild />
        </section>
        <section className="j_end gap16 flex_wrap">
          <NavLink
            className="row gap10 button button0 border white_bg nowrap"
            to={"/Admin/Testimonials"}
          >
            <img src={files.lesserArrow} alt="arrow" />
            Back
          </NavLink>
          <NavLink
            className="row gap10 button button0 black nowrap"
            to={"/Admin/Testimonials/Preview Testimonials"}
          >
            Preview
            <img src={files.greaterArrow} alt="arrow" />
          </NavLink>
        </section>
      </section>
    </>
  );
}
export default PreviewTestimonials;
