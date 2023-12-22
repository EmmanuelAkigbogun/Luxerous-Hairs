import { NavLink } from "react-router-dom";
import files from "./assets/files";
function SignUp() {
  return (
    <>
      <section className="j_center">
        <section className="gap24 column sign_up  white_bg">
          <h2 className="heading heading2_small j_center">Sign Up</h2>
          <section className="column gap12">
            <section className="column gap4">
              <section>
                <label htmlFor="name">Name *</label>
              </section>
              <input
                id="name"
                type="text"
                placeholder="Jane"
                className="contact_input input_border"
              />
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="email">Email *</label>
              </section>

              <input
                id="email"
                type="email"
                placeholder="janejennygmail.com"
                className="contact_input input_border"
              />
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="email">Password *</label>
              </section>
              <section className="width100 row input_border align_center">
                <input
                  id="password"
                  type="password"
                  placeholder="*************"
                  className="width100 contact_input no_border"
                />

                <img src={files.eyeSlash} alt="" className="contact_input" />
              </section>
            </section>
          </section>
          <section className="j_center">
            <p
              className="paragraph paragraph2 text_center"
              style={{ width: "307px", color: "black" }}
            >
              By signing up you consent to the{" "}
              <NavLink className="paragraph_bold"> Privacy Policy </NavLink> and{" "}
              <NavLink className="paragraph_bold">Terms of Service.</NavLink>
            </p>
          </section>
          <section className="gap32 column">
            <section>
              <NavLink className="row gap10 button button0 black width100">
                Sign Up <img src={files.arrowRight} alt="" />
              </NavLink>
            </section>
            <section className="gap16 column align_center width100">
              <section className="gap24 row flex_wrap j_center">
                <button
                  className="logo_button width100"
                  style={{ width: "70px" }}
                >
                  <img src={files.apple} alt="apple" className="icon" />
                </button>
                <button
                  className="logo_button width100"
                  style={{ width: "70px" }}
                >
                  <img src={files.google} alt="google" className="icon" />
                </button>
                <button
                  className="logo_button width100"
                  style={{ width: "70px" }}
                >
                  <img src={files.faceBook} alt="face book" className="icon" />
                </button>
              </section>
              <section className="row gap8 flex_wrap j_center">
                <p className="paragraph paragraph1">Already have an account?</p>
                <NavLink
                  className="paragraph paragraph1 paragraph_bold"
                  to={`/Account/Sign In`}
                >
                  Sign In
                </NavLink>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default SignUp;
