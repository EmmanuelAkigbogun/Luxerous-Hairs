import { Outlet } from "react-router-dom";
import Header from "./General/Header";
import Footer from "./General/Footer";
function Pages() {
  return (
    <>
      <Header bagBoolean={true} />
      <Outlet />
      <Footer />
    </>
  );
}
export default Pages;
