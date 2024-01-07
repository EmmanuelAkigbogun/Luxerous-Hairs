import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import files from "../assets/files";
import { NavDropDown } from "./NavDropDown";
import Profile from "./Profile";
let list = [
  "Raw Straight Type 1",
  "Raw Straight Type 2",
  "Raw Straight Type 3",
  "Raw Straight Type 4",
  "Raw Straight Type 5",
  "Raw Straight Type 6",
  "Raw Straight Type 7",
  "Raw Straight Type 8",
  "Raw Straight Type 9",
];
//     click=""

function Nav({ bagBoolean }) {
  let ref = useRef(null);
  let [se, sse] = useState("mobile_hide");
  let [h, sh] = useState("");
  let [c, sc] = useState("");
  let [cl, scl] = useState("");
  window.onclick = (e) => {
    c == "" ? "" : !ref.current.contains(e.target) && sc((c = ""));
  };
  return (
    <>
      <header
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
              <section className="mobile_width100 mob_gap24 mob_col mobile_show relative">
                <section
                  className={`row gap8 mobile_space_between mobile_width100 pointer`}
                  onClick={() => {
                    cl == "" ? scl((cl = "love")) : scl((cl = ""));
                  }}
                  onMouseOver={() => {
                    sh((h = "desk_nav_pad desk_flex"));
                  }}
                  onMouseOut={() => {
                    sh((h = ""));
                  }}
                >
                  <p className="paragraph paragraph1">Bundles</p>
                  <img
                    src={files.arrowUp}
                    alt="arrow up"
                    className={`nav_icons nav_expand ${
                      h == "" ? "desk_deg180" : ""
                    } ${cl == "" ? "mob_deg180" : ""}`}
                  />
                </section>
                <section
                  className={`${h == "" ? "" : "desk_drop_container"} ${
                    cl == "" ? "mobile_hide" : "mobile_show"
                  }`}
                  onMouseOver={() => {
                    sh((h = "desk_nav_pad desk_flex"));
                  }}
                  onMouseOut={() => {
                    sh((h = ""));
                  }}
                >
                  <NavDropDown
                    value={list}
                    position={`${h == "" ? "" : "desk_fixed"} ${
                      cl == "" ? "none" : "mob_position pointer"
                    }`}
                    hover={h}
                    close={c}
                    click={cl}
                    setClose={sc}
                    bagBoolean={bagBoolean}
                  />
                </section>
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
            <NavLink
              to={bagBoolean?`/`:`/Admin`}
              className={`heading heading3 ${c == "" ? "none345" : ""}`}
              onClick={() => {
                window.scrollTo(0, 0);
                c == "" ? "" : sc((c = ""));
              }}
            >
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
            } ${bagBoolean ? "" : "desk_none"}`}
          >
            <NavLink
              to="/Contact Us"
              className={`paragraph paragraph1 
              mobile_hide
              ${c == "" ? "" : bagBoolean ? "mobile_show" : ""}
              `}
              onClick={() => {
                window.scrollTo(0, 0);
                c == "" ? "" : sc((c = ""));
              }}
            >
              Contact Us
            </NavLink>
            <section
              className={`row gap24 nav_icons_container ${
                bagBoolean ? "" : "desk_none"
              } ${c == "" ? "mobile_show" : "mobile_hide"}`}
            >
              <section className="align_center">
                <img
                  src={files.searchMobile}
                  alt="search"
                  className="class_icon none mobile_show"
                  onClick={() => {
                    se == "mobile_hide"
                      ? sse((se = "mobile_show"))
                      : sse((se = "mobile_hide"));
                  }}
                />
              </section>
              {bagBoolean ? <Profile c={c} sc={sc} /> : ""}
              <NavLink
                to={`/Shop%20Our%20Bundles/My%20Cart`}
                className={`align_center  ${bagBoolean ? "" : "none"}`}
                onClick={() => {
                  window.scrollTo(0, 0);
                  c == "" ? "" : sc((c = ""));
                }}
              >
                <img src={files.bag} alt="bag icon" className={`nav_icons`} />
              </NavLink>
            </section>
          </section>
        </nav>
        <section className={`parent_section nav_bottom none width100 ${se}`}>
          <section className="row gap8 search_container width100">
            <input
              type="search"
              placeholder="Search Products"
              className="search_input search_input1"
            />
            <section className="search_image_container black_search">
              <img src={files.search} alt="search" className="nav_icons" />
            </section>
          </section>
        </section>
      </header>
      {console.log("paras nav")}
    </>
  );
}
export default Nav;
