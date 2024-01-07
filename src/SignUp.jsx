import { NavLink, useNavigate } from "react-router-dom";
import files from "./assets/files";
import PasswordField from "./PasswordField";
import { provider } from "../config/firebase";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
function SignUp() {
  let navigate = useNavigate();
  auth.onAuthStateChanged(() => {
    let fat = new Date(auth?.currentUser?.metadata?.lastSignInTime);
    let slim = fat?.toLocaleString();
    console.log("last logged in", slim);
    console.log(auth);
  });
  return (
    <>
      <section className="j_center">
        <form
          className="gap24 column sign_up  white_bg"
          onSubmit={async (e) => {
            e.preventDefault();
            let formData = new FormData(e.target);
            await createUserWithEmailAndPassword(
              auth,
              Object.fromEntries(formData.entries())["email"],
              Object.fromEntries(formData.entries())["password-sign-up"]
            ).catch((e) => alert(String(e).split(":").pop()));
            console.log(auth);
            auth?.currentUser?.uid == null
              ? navigate("")
              : auth?.currentUser?.uid == import.meta.env.VITE_ADMIN_ID
              ? navigate("/Admin")
              : navigate("/Account/Account Details");

            //auth?.currentUser?.email=null?navigate("/Account/Account Details"):navigate("")
          }}
        >
          <h2 className="heading heading2_small j_center">Sign Up</h2>
          <section className="column gap12">
            <section className="column gap4">
              <section>
                <label htmlFor="name">Name *</label>
              </section>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="jane"
                className="contact_input input_border"
                autoComplete="true"
              />
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="email">Email *</label>
              </section>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="janejennygmail.com"
                className="contact_input input_border"
                autoComplete="true"
              />
            </section>
            <PasswordField
              labelValue="Password"
              forValue="password"
              nameValue="password-sign-up"
            />
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
              <button className="row gap10 button button0 black width100">
                Sign Up <img src={files.arrowRight} alt="" />
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
                  type="button"
                >
                  <img
                    src={files.google}
                    alt="google"
                    className="icon"
                    onClick={async () => {
                      await signInWithPopup(auth, provider)
                        .then((e) => console.log(e))
                        .catch((f) => console.log(f));
                      auth?.currentUser?.uid == null
                        ? ""
                        : navigate("/Account/Account Details");
                    }}
                  />
                </button>
                <button
                  className="logo_button width100"
                  style={{ width: "70px" }}
                  type="button"
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
              {
                //console.log(auth.currentUser.metadata.lastSignInTime)
              }
            </section>
          </section>
        </form>
      </section>
    </>
  );
}
export default SignUp;
