import { NavLink } from "react-router-dom";
import files from "./assets/files";
import PasswordField from "./PasswordField";
function ResetPassword() {
  return (
    <>
      <section className="j_center">
        <form
          className="gap24 column sign_up  white_bg"
          onSubmit={(e) => {
            e.preventDefault();
            let formData = new FormData(e.target);
            console.log(Object.fromEntries(formData.entries()));
          }}
        >
          <section>
            <h2 className="heading heading2_small j_center">Reset Password</h2>
            <p className="paragraph paragraph2 text_center">
              Please enter a new password to continue
            </p>
          </section>
          <section className="column gap12">
            <PasswordField
              labelValue="New Password"
              forValue="password1"
              nameValue="password1-reset"
            />
            <PasswordField
              labelValue="PRe-enter New Password"
              forValue="password2"
              nameValue="password2-reset"
            />
          </section>
          <section className="column gap16">
            <button className="row gap10 button button0 black width100">
              Sign In <img src={files.arrowRight} alt="" />
            </button>
          </section>
        </form>
      </section>
    </>
  );
}
export default ResetPassword;
