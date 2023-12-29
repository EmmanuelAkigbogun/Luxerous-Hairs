import { NavLink, useNavigate } from "react-router-dom";
import files from "./assets/files";
function ForgotPassword() {
  let navigate = useNavigate();
  return (
    <>
      <section className="j_center">
        <form
          className="gap24 column sign_up  white_bg"
          onSubmit={(e) => {
            e.preventDefault();
            let formData = new FormData(e.target);
            console.log(Object.fromEntries(formData.entries()));
            navigate(`/Account/Reset%20Password`);
          }}
        >
          <section>
            <h2 className="heading heading2_small j_center">Enter Email</h2>
            <p className="paragraph paragraph2 text_center">
              A password rest link would be sent to your email
            </p>
          </section>
          <section className="column gap12">
            <section className="column gap4">
              <section>
                <label htmlFor="email">Email *</label>
              </section>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="janejennygmail.com"
                className="contact_input input_border"
              />
            </section>
          </section>
          <section className="gap32 column">
            <section className="column gap16">
              <button className="row gap10 button button0 black width100">
                Sign In <img src={files.arrowRight} alt="" />
              </button>
              <NavLink className="row gap10 button button0 border white_bg width100">
                Cancel
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
              <NavLink
                className="row gap8 flex_wrap j_center"
                to={`/Account/Sign Up`}
              >
                <p className="paragraph paragraph1">Don’t have an account?</p>
                <p className="paragraph paragraph1 paragraph_bold">Sign Up</p>
              </NavLink>
            </section>
          </section>
        </form>
      </section>
    </>
  );
}
export default ForgotPassword;
