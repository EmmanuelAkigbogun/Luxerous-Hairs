import { provider, auth } from "../config/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NavLink, useNavigate,   } from "react-router-dom";
import files from "./assets/files";
import PasswordField from "./PasswordField";
import InputField from "./InputField";
function SignIn() {
  let navigate=useNavigate()
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
            await signInWithEmailAndPassword(
              auth,
              Object.fromEntries(formData.entries())["email"],
              Object.fromEntries(formData.entries())["password-sign-in"]
            )
              .then((e) => console.log(e))
              .catch((e) => alert(String(e).split(":").pop()));
            auth?.currentUser?.uid == null
              ? navigate("")
              : auth?.currentUser?.uid == import.meta.env.VITE_ADMIN_ID
              ? navigate("/Admin")
              : navigate("/");
          }}
        >
          <h2 className="heading heading2_small j_center">Sign In</h2>
          <section className="column gap12">
            <InputField
              labelValue="Email"
              forValue="email"
              nameValue="password-sign-in"
              placeholder="janejennygmail.com"
              typeValue="email"
              classValue=""
            />
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
                  onClick={async () => {
                    await signInWithPopup(auth, provider)
                      .then((e) => console.log(e))
                      .catch((f) => console.log(f));
                    auth?.currentUser?.uid == null
                      ? navigate("")
                      : navigate("/");
                  }}
                  type="button"
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
            <img
              style={{ width: "24px", height: "24px", borderRadius: "50%" }}
              alt=""
            />
          </section>
        </form>
      </section>
    </>
  );
}
export default SignIn;
