import { Grid } from "./General/Grid";
import data from "../src/assets/Bundles";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "./Pagination";
function BundleName() {
  let { par } = useParams();
  let dia = useParams();
  let ada = useParams();
  let local = useLocation();
  let constant = 20;
  let maplist = data.filter((f) => f.text == par)[0].content;
  let maxGuy = maplist.slice(
    0,
    maplist.length % constant == 0
      ? maplist.length / constant
      : parseInt(maplist.length / constant) + 1
  ).length;
  let n = 0;
  let qy = 0;
  !local.pathname.includes("_Page")
    ? (n = 0)
    : (n = (Number(ada["ada"].replace("_Page", "")) - 1) * 20);
  local.pathname.includes("_Page")
    ? (qy = Number(ada["ada"].replace("_Page", "")) - 1)
    : (qy = 0);
  let k = 4;
  return (
    <>
      <div className="parent_section">
        <section
          className="bundle_name_grid"
          key={String(Math.random()).slice(2, 8)}
        >
          {data.slice(0, 5).map((e, i) => {
            return (
              <Grid
                data={data
                  .filter((f) => f.text == par)[0]
                  .content.slice(n + k * i, n + k * (i + 1))}
                key={String(Math.random()).slice(2, 8)}
                bundlename={par}
                n={i}
                m={qy}
              />
            );
          })}
        </section>
        <Pagination
          maplist={maplist}
          maxGuy={maxGuy}
          constant={constant}
        />
      </div>
    </>
  );
}
export default BundleName;
