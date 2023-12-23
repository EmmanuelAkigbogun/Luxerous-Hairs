import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import files from "../assets/files";
import { NavDropDown } from "./NavDropDown";
let list = [
  "Raw Straight Type 1",
  "Raw Straight Type 2",
  "Raw Straight Type 3",
  "Raw Straight Type 4",
  "Raw Straight Type 5",
  "Raw Straight Type 6",
];
//     click=""
function Nav({ bagBoolean }) {
  let ref = useRef(null);
  let [h, sh] = useState("");
  let [c, sc] = useState("");
  let [cl, scl] = useState("");
  return (
    <>
      <section
        className={`fixed ${c == "" ? "" : "mob_80vh mob_overflow "}`}
        ref={ref}
      >
        <nav
          className={`nav parent_section space_between ${
            c == "" ? "" : "mob_col mob_gap24"
          }`}
        >
          <section
            className={`${
              c == ""
                ? "mobile_hide"
                : "mob_order1 mobile_show mobile_width100 "
            }`}
          >
            <section className="row gap32 align_center mobile_width100">
              <section className="mobile_width100 mob_gap24 mob_col mobile_show">
                <section
                  className={`row gap8 mobile_space_between mobile_width100`}
                  onMouseOver={() => {
                    sh((h = "desk_nav_pad desk_flex"));
                  }}
                  onMouseOut={() => {
                    sh((h = ""));
                  }}
                  onClick={() => {
                    cl == "" ? scl((cl = "love")) : scl((cl = ""));
                  }}
                >
                  <p className="paragraph paragraph1">Bundles</p>
                  <img
                    src={files.arrowUp}
                    alt="arrow up"
                    className={`nav_icons nav_expand ${
                      h == "" ? "desk_deg180" : ""
                    } ${cl == "" ? "deg180" : ""}`}
                  />
                </section>
                <NavDropDown
                  value={list}
                  position={`${h == "" ? "" : "desk_fixed"} ${
                    cl == "" ? "none" : "mob_position"
                  }`}
                  hover={h}
                  click={cl}
                />
              </section>
              <section className="row gap8 search_container mobile_hide">
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
          <section
            className={`gap4 row align_center wrap345 hamburger_container ${
              c == "" ? "" : "mobile_space_between mobile_width100"
            }`}
          >
            <img
              src={files.menu}
              alt="menu"
              className={`class_icon none ${
                c == "" ? "mobile_show" : "mobile_hide"
              }`}
              onClick={() => {
                sc((c = "love"));
              }}
            />
            <NavLink to="/" className="heading heading3">
              Luxurious Hair
            </NavLink>
            <img
              src={files.close}
              alt="menu"
              className={`class_icon none ${
                c == "" ? "mobile_hide" : "mobile_show"
              }`}
              onClick={() => {
                sc((c = ""));
              }}
            />
          </section>
          <section
            className={`row gap24 ${
              c == "" ? "" : "mob_order2 mobile_width100"
            }`}
          >
            <NavLink
              to="/Contact Us"
              className={`paragraph paragraph1 
              mobile_hide
              ${c == "" ? "" : "mobile_show"}
              `}
            >
              Contact Us
            </NavLink>
            <section
              className={`row gap24 nav_icons_container ${
                c == "" ? "mobile_show" : "mobile_hide"
              }`}
            >
              <img
                src={files.searchMobile}
                alt="search"
                className="class_icon none mobile_show"
                onClick={() => {
                  alert(getComputedStyle(ref.current).height);
                }}
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
