import { useLocation, NavLink, useParams } from "react-router-dom";
import files from "../src/assets/files";
export let Test = () => {
  let { id } = useParams();
  let location = useLocation();
  let pathSum = "";
  let maxNumber = id;
  return (
    <>
      <section className="after_nav column gap8 parent_section location">
        <h1 className="heading heading1">
          {location.pathname
            .replaceAll("%20", " ")
            .split("/")
            .filter((filter) => !filter.includes("_Page"))
            .pop()}
        </h1>
        <section className="row gap8 align_center">
          {location.pathname
            .replaceAll("%20", " ")
            .split("/")
            .filter((filter) => !filter.includes("_Page"))
            .map((e, i) => {
              if (i != 0) pathSum += "/" + e;
              return (
                <section key={e + i + "fragment"}>
                  {((e == "" && i == 0) || e != "") &&
                    (location.pathname.split("/").length <= maxNumber ||
                      i + 1 >
                        location.pathname.split("/").length - maxNumber) && (
                      <section className="row align_center gap8">
                        <NavLink
                          className={`paragraph paragraph2 all_path ${
                            i == location.pathname.split("/").length - 1 &&
                            "page_path"
                          }`}
                          to={e == "" ? "/" : pathSum}
                          key={e + i}
                        >
                          {location.pathname.split("/").length >= maxNumber &&
                          i == location.pathname.split("/").length - maxNumber
                            ? "../"
                            : e == ""
                            ? "HomePage"
                            : e == "Shop Our Bundles"
                            ? "Bundles"
                            : e}
                        </NavLink>
                        {i == location.pathname.split("/").length - 1 ? (
                          ""
                        ) : (
                          <img src={files.path} alt="path" />
                        )}
                      </section>
                    )}
                </section>
              );
            })}
        </section>
      </section>
      {console.log(location.pathname)}
      {console.log(location.pathname.split("/").length)}
    </>
  );
};
