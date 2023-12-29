import { useParams } from "react-router-dom";
import Review from "./Review";
import Pagination from "./Pagination";
import data from "./assets/Bundles";
function AllReviews({ classValue }) {
  let ada = useParams();
  let { par } = useParams();
  let dia = useParams();
  let constant = 6;
  let a = data.filter((f) => f.text == par)[0].content[
    Number(dia["dia"].split("@@Static@")[0])
  ];
  let maxGuy = a.reviews.slice(
    0,
    a.reviews.length % constant == 0
      ? a.reviews.length / constant
      : parseInt(a.reviews.length / constant) + 1
  ).length;
  return (
    <>
      <section className="parent_section">
        <section className={`product_b ${classValue}`}>
          <section className="product_outlet_parent">
            <section className="product_outlet">
              <section className="product_outlet_child">
                <Review
                  start={6 * (Number(ada["ada"].replace("_Page", "")) - 1)}
                  end={6 * (Number(ada["ada"].replace("_Page", "")) - 1) + 6}
                  column_class="column_reverse"
                  row_class="row_reverse j_end"
                  inner_text="Back"
                  icon_rotation="deg90"
                  text_weight="paragraph_bold"
                />
              </section>
              <section>
                <Pagination
                  maplist={a.reviews}
                  maxGuy={maxGuy}
                  constant={constant}
                />
              </section>
            </section>
            <section className="product_outlet_sibling"></section>
            {console.log(ada)}
          </section>
        </section>
      </section>
    </>
  );
}
export default AllReviews;
