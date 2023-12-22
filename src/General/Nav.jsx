import { useRef } from "react";
import { NavLink } from "react-router-dom";
import files from "../assets/files";
function Nav({ bagBoolean }) {
  let ref = useRef(null);
  return (
    <>
      <section className="fixed" ref={ref}>
        <nav className="nav parent_section space_between">
          <section className="mobile_hide">
            <section className="row gap32 align_center">
              <section className="row gap8">
                <p
                  className="paragraph paragraph1"
                  onClick={() => {
                    alert(getComputedStyle(ref.current).height);
                  }}
                >
                  Bundles
                </p>
                <img
                  src={files.arrowUp}
                  alt="arrow up"
                  className="nav_icons nav_expand"
                />
              </section>
              <section className="row gap8 search_container">
                <input
                  type="search"
                  placeholder="Search Products"
                  className="search_input"
                />
                <section className="search_image_container black_search">
                  <img src={files.search} alt="search" className="nav_icons" />
                </section>
              </section>
            </section>
          </section>
          <section className="gap24 row align_center hamburger_container">
            <img
              src={files.menu}
              alt="menu"
              className="class_icon none mobile_show"
            />
            <NavLink to="/" className="heading heading3">
              Luxurious Hair
            </NavLink>
          </section>
          <section className="row gap24">
            <NavLink to="/Contact" className="paragraph paragraph1 mobile_hide">
              Contact Us
            </NavLink>
            <section className="row gap24 nav_icons_container">
              <img
                src={files.searchMobile}
                alt="search"
                className="class_icon none mobile_show"
              />
              <img
                src={files.profile}
                alt="profile icon"
                className="nav_icons"
              />
              <img
                src={files.bag}
                alt="bag icon"
                className={`nav_icons ${bagBoolean ? "" : "none"}`}
              />
            </section>
          </section>
        </nav>
      </section>
    </>
  );
}
export default Nav;
