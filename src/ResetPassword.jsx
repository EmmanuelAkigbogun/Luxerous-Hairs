import { NavLink } from "react-router-dom";
import files from "./assets/files";
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
            <section className="column gap4">
              <section>
                <label htmlFor="password1">New Password *</label>
              </section>
              <section className="width100 row input_border align_center">
                <input
                  id="password1"
                  name="password1-reset"
                  type="password"
                  placeholder="*************"
                  className="width100 contact_input no_border"
                  autoComplete="true"
                />

                <img src={files.eyeSlash} alt="" className="contact_input" />
              </section>
            </section>
            <section className="column gap4">
              <section>
                <label htmlFor="password2">PRe-enter New Password *</label>
              </section>
              <section className="width100 row input_border align_center">
                <input
                  id="password2"
                  name="password2-reset"
                  type="password"
                  placeholder="*************"
                  className="width100 contact_input no_border"
                  autoComplete="true"
                />

                <img src={files.eyeSlash} alt="" className="contact_input" />
              </section>
            </section>
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
