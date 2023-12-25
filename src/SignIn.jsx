import { NavLink, useNavigate } from "react-router-dom";
import files from "./assets/files";
import PasswordField from "./PasswordField";
function SignIn() {
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
            formData.get("email-sign-in") == "emmanuelakigbogun@gmail.com" &&
            formData.get("password-sign-in") == "love"
              ? navigate("/admin")
              : formData.get("email-sign-in") ==
                  "emmanuelakigbogun@gmail.com" &&
                formData.get("password-sign-in")=="hate"
              ? navigate("/")
              : navigate("/Account/Sign Up");
            {
              console.log(
                formData.get("password-sign-in")["password-sign-in"] == "adamas"
              );
            }
          }}
        >
          <h2 className="heading heading2_small j_center">Sign In</h2>
          <section className="column gap12">
            <section className="column gap4">
              <section>
                <label htmlFor="email">Email *</label>
              </section>

              <input
                id="email"
                type="email"
                name="email-sign-in"
                placeholder="janejennygmail.com"
                className="contact_input input_border"
                autoComplete="true"
              />
            </section>
            <PasswordField
              labelValue="Password"
              forValue="password"
              nameValue="password-sign-in"
            />
          </section>
          <section className="j_center">
            <NavLink
              className="paragraph paragraph2 text_right"
              style={{ width: "307px" }}
              to={`/Account/Forgot Password`}
            >
              Forgot Password
            </NavLink>
          </section>
          <section className="gap32 column">
            <section>
              <button className="row gap10 button button0 black width100">
                Sign In <img src={files.arrowRight} alt="" />
              </button>
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
                <p className="paragraph paragraph1">Don’t have an account?</p>
                <NavLink
                  className="paragraph paragraph1 paragraph_bold"
                  to={`/Account/Sign Up`}
                >
                  Sign Up
                </NavLink>
              </section>
            </section>
          </section>
        </form>
      </section>
    </>
  );
}
export default SignIn;
