import { NavLink, useLocation, useParams } from "react-router-dom";
function Pagenation({ maplist, maxGuy, constant }) {
  let { par } = useParams();
  let ada = useParams();
  let dia = useParams();
  let { shop } = useParams();
  let location = useLocation();
  return (
    <>
      <section className="j_end pagination whitish product_scroll" >
        {maplist.length < constant * 5 + 1
          ? maplist
              .slice(
                0,
                maplist.length % constant == 0
                  ? maplist.length / constant
                  : parseInt(maplist.length / constant) + 1
              )
              .map((e, i) => {
                return (
                  <NavLink
                    className={`button_pagenation ${
                      ada["ada"] == `_Page${i + 1}` || ada["ada"] == undefined
                        ? "black"
                        : ""
                    }`}
                    to={
                      location.pathname.includes("_Page_All")
                        ? `/Shop Our Bundles/${par}/Product Name_Page/${
                            dia["dia"]
                          }/_Page_All/_Page${i + 1}`
                        : `/Shop Our Bundles/${par}/_Page${i + 1}`
                    }
                    key={Math.random()}
                  >
                    {i + 1}
                  </NavLink>
                );
              })
          : maplist.slice(0, 5).map((e, i) => {
              return (
                <NavLink
                  className={`button_pagenation ${
                    ada["ada"] ==
                      `_Page${
                        +ada["ada"].replace("_Page", "") - 3 < 0
                          ? i + 1
                          : maxGuy - +ada["ada"].replace("_Page", "") < 2
                          ? maxGuy - 2 - 3 + i + 1
                          : +ada["ada"].replace("_Page", "") - 3 + i + 1
                      }` || ada["ada"] == undefined
                      ? "black"
                      : ""
                  }`}
                  key={Math.random()}
                  to={
                    shop == "My Products"
                      ? `/Admin/${shop}/${par}/Product Name_Page/${
                          dia["dia"]
                        }/_Page_All/_Page${
                          +ada["ada"].replace("_Page", "") - 3 < 0
                            ? i + 1
                            : maxGuy - +ada["ada"].replace("_Page", "") < 2
                            ? maxGuy - 2 - 3 + i + 1
                            : +ada["ada"].replace("_Page", "") - 3 + i + 1
                        }`
                      : location.pathname.includes("_Page_All")
                      ? `/Shop Our Bundles/${par}/Product Name_Page/${
                          dia["dia"]
                        }/_Page_All/_Page${
                          +ada["ada"].replace("_Page", "") - 3 < 0
                            ? i + 1
                            : maxGuy - +ada["ada"].replace("_Page", "") < 2
                            ? maxGuy - 2 - 3 + i + 1
                            : +ada["ada"].replace("_Page", "") - 3 + i + 1
                        }`
                      : `/Shop Our Bundles/${par}/_Page${
                          +ada["ada"].replace("_Page", "") - 3 < 0
                            ? i + 1
                            : maxGuy - +ada["ada"].replace("_Page", "") < 2
                            ? maxGuy - 2 - 3 + i + 1
                            : +ada["ada"].replace("_Page", "") - 3 + i + 1
                        }`
                  }
                >
                  {+ada["ada"].replace("_Page", "") - 3 < 0
                    ? i + 1
                    : maxGuy - +ada["ada"].replace("_Page", "") < 2
                    ? maxGuy - 2 - 3 + i + 1
                    : +ada["ada"].replace("_Page", "") - 3 + i + 1}
                </NavLink>
              );
            })}
      </section>
      {console.log(ada["ada"], par, shop, shop == "My Products", maxGuy, 89)}
    </>
  );
}
export default Pagenation;
