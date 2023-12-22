import { useRef } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
function PaginationWhite({ list, directory }) {
  let { par } = useParams();
  let dia = useParams();
  let { shop } = useParams();
  let location = useLocation();
  return (
    <>
      <section className="row product_scroll whitish">
        {list.map((e, i) => {
          console.log(
            list.filter((e) =>
              location.pathname.replaceAll("%20", " ").includes(e)
            )[0],
            e,
            999
          );
          return (
            <NavLink
              className={`button1 paragraph no_border paragraph_bold ${
                e ==
                list.filter((e) =>
                  location.pathname.replaceAll("%20", " ").includes(e)
                )[0]
                  ? "white_bg"
                  : list.filter((e) =>
                      location.pathname.replaceAll("%20", " ").includes(e)
                    )[0] == undefined && i == 0
                  ? "white_bg"
                  : "whitish opacity"
              }`}
              key={e}
              to={
                e ==
                list.filter((e) =>
                  location.pathname.replaceAll("%20", " ").includes(e)
                )[0]
                  ? location.pathname
                  : list.filter((e) =>
                      location.pathname.replaceAll("%20", " ").includes(e)
                    )[0] == undefined && i == 0
                  ? location.pathname
                  : directory == "Account" || directory == "Admin"
                  ? `/${directory}/${e}`
                  : shop == "New Product"
                  ? `/Admin/My Products/${shop}/_Page_${e}`
                  : `/${
                      shop == "My Products"
                        ? `Admin/My Products`
                        : `Shop Our Bundles`
                    }/${par}/Product Name_Page/${
                      dia["dia"]
                    }${directory}/_Page_${e}`
              }
              state={location.state}
            >
              {e}
            </NavLink>
          );
        })}
      </section>
      {console.log(`${location}`)}
    </>
  );
}
export default PaginationWhite;
