import { Grid } from "./General/Grid";
import data from "../src/assets/Bundles";
function AdminProductsAll() {
  let k = 4;
  let n = 0;
  let m = 0;
  return (
    <>
      <section>
        <h4 className="heading heading2">Best Sellers</h4>
        <Grid
          data={data
            .filter((f) => f.text == "Shop Best Sellers")[0]
            .content.slice(0, 4)}
          bundlename="Shop Best Sellers"
          classValue="cards_admin"
          n={0}
          m={0}
        />
      </section>
      <section>
        <h4 className="heading heading2">Others</h4>
        {data.slice(0, 3).map((e, i) => {
          return (
            <Grid
              data={data
                .filter((f) => f.text == "Raw Straight Type 1")[0]
                .content.slice(n + k * i, n + k * (i + 1))}
              key={String(Math.random()).slice(2, 8)}
              bundlename={"Raw Straight Type 1"}
              classValue="cards_admin"
              n={n}
              m={m}
            />
          );
        })}
      </section>
    </>
  );
}
export default AdminProductsAll;
