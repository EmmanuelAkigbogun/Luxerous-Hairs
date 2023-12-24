import { Outlet } from "react-router-dom";
function CreateAccount() {
  return (
    <>
      <section className="parent_section">
        <section className="page_band">
          <h1 className="heading heading1">My Account</h1>
        </section>
        <Outlet />
      </section>
    </>
  );
}
export default CreateAccount;
