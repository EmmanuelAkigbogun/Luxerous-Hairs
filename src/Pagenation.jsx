import { NavLink, useLocation, useParams } from "react-router-dom";
function Pagenation() {
  let { par } = useParams();
  let ada = useParams();
  let dia = useParams();
  let location = useLocation();
  return (
    <>
      <section className="j_end height100 pagenation whitish">
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page1" || ada["ada"] == undefined ? "black" : ""
          }`}
          to={
            location.pathname.includes("_Page_All")
              ? `/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/_Page_All/_Page1`
              : `/Shop Our Bundles/${par}/_Page1`
          }
        >
          1
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page2" ? "black" : ""
          }`}
          to={
            location.pathname.includes("_Page_All")
              ? `/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/_Page_All/_Page2`
              : `/Shop Our Bundles/${par}/_Page2`
          }
        >
          2
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page3" ? "black" : ""
          }`}
          to={
            location.pathname.includes("_Page_All")
              ? `/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/_Page_All/_Page3`
              : `/Shop Our Bundles/${par}/_Page3`
          }
        >
          3
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page4" ? "black" : ""
          }`}
          to={
            location.pathname.includes("_Page_All")
              ? `/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/_Page_All/_Page4`
              : `/Shop Our Bundles/${par}/_Page4`
          }
        >
          4
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page5" ? "black" : ""
          }`}
          to={
            location.pathname.includes("_Page_All")
              ? `/Shop Our Bundles/${par}/Product Name_Page/${dia["dia"]}/_Page_All/_Page5`
              : `/Shop Our Bundles/${par}/_Page5`
          }
        >
          5
        </NavLink>
      </section>
      {console.log(ada["*"], par, 89)}
    </>
  );
}
export default Pagenation;
