import UploadCard from "./UploadCard";
import UploadedImages from "./UploadedImages";
import { NavLink } from "react-router-dom";
import files from "./assets/files";
function AddTestimonials() {
  return (
    <>
      <section>
        <section className="gap24 flex_wrap mobile_column row">
          <section className="flex1 gap19 column">
            <section className="column gap4">
              <section>
                <label htmlFor="display_name">Name to display *</label>
              </section>
              <input
                id="display_name"
                type="text"
                placeholder="Name"
                className="contact_input input_border"
              />
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="title">Title or Occupatiion *</label>
              </section>
              <input
                id="title"
                type="text"
                placeholder="Investment Banger"
                className="contact_input input_border"
              />
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="note">Testimonial Note *</label>
              </section>
              <textarea
                id="note"
                type="text"
                placeholder="Write something you love about Luxurious Hairs..."
                className="contact_input long_input1 input_border"
              ></textarea>
            </section>
          </section>
          <section className="flex1 gap16 column">
            <section className="gap24  mobile_column_tiny row flex_wrap">
              <section className="flex1 j_center">
                <UploadCard />
              </section>
              <section className="flex1 j_center">
                <UploadedImages booleanas={false} image={files.brunetteSmiling} />
              </section>
              <section className="flex1 j_center">
                <UploadedImages booleanas={false} image={files.brunetteSmiling} />
              </section>
              <section className="flex1 j_center">
                <UploadedImages booleanas={false} image={files.brunetteSmiling} />
              </section>
            </section>
            <section className="gap32 column">
              <p className="paragraph paragraph2">
                Upload Images in JPG or PNG and Videos in MP4 format.
                Recommended resolution is 202 pixels width x 174 pixels height
              </p>
              <section className="space_between gap16 flex_wrap">
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
          </section>
        </section>
      </section>
    </>
  );
}

export default AddTestimonials;
