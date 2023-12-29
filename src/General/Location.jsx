import { useLocation, NavLink, useParams } from "react-router-dom";
import files from "../assets/files";
export let Location = () => {
  let location = useLocation();
  let pathSum = "";
  let maxNumber = 3;
  let su = -1;
  let { par } = useParams();
  let { dia } = useParams();
  return (
    <>
      <section className="column gap8 parent_section location">
        <h1 className="heading heading1">
          {location.pathname
            .replaceAll("%20", " ")
            .split("/")
            .filter((filter) => !filter.includes("_Page"))
            .pop()
            .split("@@Static@")
            .pop()
            .replaceAll(
              dia !== undefined ? dia.split("@@Static@")[1] : "",
              dia !== undefined ? "Product Details" : ""
            )}
          {console.log(dia)}
        </h1>
        <section className="row gap8 align_center product_scroll">
          {location.pathname
            .replaceAll("%20", " ")
            .split("/")
            .map((e, i) => {
              if (i != 0) {
                pathSum += "/" + e;
              }
              if (!e.includes("_Page")) {
                su++;
                return (
                  <section
                    key={e + su + "fragment"}
                    style={{ minWidth: "fit-content", whiteSpace: "nowrap" }}
                  >
                    {((e == "" && su == 0) || e != "") &&
                      su + 1 >
                        location.pathname
                          .split("/")
                          .filter((filter) => !filter.includes("_Page"))
                          .length -
                          maxNumber && (
                        <section className="row align_center gap8">
                          <NavLink
                            className={`paragraph paragraph2 all_path ${
                              su + 1 ==
                                location.pathname
                                  .split("/")
                                  .filter((filter) => !filter.includes("_Page"))
                                  .length && "page_path"
                            }`}
                            to={
                              e == ""
                                ? "/"
                                : su ==
                                  location.pathname
                                    .split("/")
                                    .filter(
                                      (filter) => !filter.includes("_Page")
                                    ).length -
                                    1
                                ? location.pathname
                                : pathSum.endsWith(par)
                                ? pathSum + "/_Page1"
                                : pathSum
                            }
                            state={location.state}
                            key={e + su}
                          >
                            {
                              //between the last displayed link and 2 elements before
                              //home page
                              //bundle page
                              // and others seperating id when needed
                            }
                            {su ==
                            location.pathname
                              .split("/")
                              .filter((filter) => !filter.includes("_Page"))
                              .length -
                              maxNumber
                              ? "../"
                              : e == ""
                              ? "HomePage"
                              : e == "Shop Our Bundles"
                              ? "Bundles"
                              : e.split("@@Static@").pop()}
                          </NavLink>
                          {
                            //the last displayed link
                          }
                          {su ==
                          location.pathname
                            .split("/")
                            .filter((filter) => !filter.includes("_Page"))
                            .length -
                            1 ? (
                            ""
                          ) : (
                            <img src={files.path} alt="path" />
                          )}
                        </section>
                      )}
                  </section>
                );
              }
            })}
        </section>
      </section>
      {console.log(location.pathname, 90)}
      {console.log(location.pathname.split("/").length)}
    </>
  );
};
