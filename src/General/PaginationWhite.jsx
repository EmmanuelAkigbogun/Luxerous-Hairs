import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
function PaginationWhite({ list, directory }) {
  let { par } = useParams();
  let { dia } = useParams();
  let { shop } = useParams();
  let location = useLocation();
  let newLocation = location.pathname.split("/");
  let navigate = useNavigate();
  newLocation.pop();
  newLocation = newLocation.join("/");
  let newLocation1 = location.pathname;
  return (
    <>
      <section className="row product_scroll whitish">
        {list.map((e, i) => {
          return (
            <button
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
              onClick={() => {
                navigate(
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
                    : directory == "My Cart"
                    ? `${
                        location.pathname.endsWith("My%20Cart")
                          ? newLocation1
                          : newLocation
                      }${`/_Page_${e}`}`
                    : shop == "New Product"
                    ? `/Admin/My Products/${shop}/_Page_${e}`
                    : `/${
                        shop == "My Products"
                          ? `Admin/My Products`
                          : `Shop Our Bundles`
                      }/${par}/Product Name_Page/${dia}${directory}/_Page_${e}`
                ),
                  { state: location.state };
              }}
            >
              {e}
            </button>
          );
        })}
      </section>
      {console.log(directory, "dir")}
      {console.log(`${location}`)}
    </>
  );
}
export default PaginationWhite;
