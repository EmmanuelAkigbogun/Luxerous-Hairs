import { Grid } from "./General/Grid";
import data from "../src/assets/Bundles";
import { useLocation, useParams } from "react-router-dom";
import Pagination from "./Pagination";
function AdminProductsBundles() {
  let { par } = useParams();
  let { ada } = useParams();
  let local = useLocation();
  let k = 4;
  let n = 0;
  let m = 0;
  let constant = 20;
  let maplist = data.filter((f) => f.text == par)[0].content;
  let maxGuy = maplist.slice(
    0,
    maplist.length % constant == 0
      ? maplist.length / constant
      : parseInt(maplist.length / constant) + 1
  ).length;
  !local.pathname.includes("_Page")
    ? (n = 0)
    : (n = (Number(ada.replace("_Page", "")) - 1) * 20);
  local.pathname.includes("_Page")
    ? (m = Number(ada.replace("_Page", "")) - 1)
    : (m = 0);
  return (
    <>
      <div className="">
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
                classValue=""
                n={i}
                m={m}
              />
            );
          })}
        </section>
        <Pagination maplist={maplist} maxGuy={maxGuy} constant={constant} />
      </div>
    </>
  );
}
export default AdminProductsBundles;
