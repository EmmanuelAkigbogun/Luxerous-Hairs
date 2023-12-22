import { NavLink, Outlet } from "react-router-dom";
import files from "./assets/files";
function Testimonials() {
  return (
    <>
      <section className="outlet_box column white_bg">
        <section className="space_between flex_wrap gap16 white_bg">
          <p className="paragraph paragraph0 paragraph_bold">Testimonial</p>
          <NavLink className="gap10 row align_center flex_wrap"
          to={`Add Testimonials`}>
            <p className="paragraph paragraph1">Add New Testimonial</p>
            <img src={files.add} alt="add icon" />
          </NavLink>
        </section>
        <section>
          <Outlet />
        </section>
      </section>
    </>
  );
}
export default Testimonials;
