import { Grid } from "./General/Grid";
import data from "../src/assets/Bundles";
import { review } from "../src/assets/Bundles";
import { useLocation, useParams } from "react-router-dom";
import Pagenation from "./Pagenation";
function BundleName() {
  let { par } = useParams();
  let dia = useParams();
  let ada = useParams();
  let local = useLocation();
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
        <Pagenation />
      </div>
    </>
  );
}
export default BundleName;
