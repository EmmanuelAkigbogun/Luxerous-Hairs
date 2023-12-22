import { NavLink, useLocation, useParams } from "react-router-dom";
import Review from "./Review";
import Pagenation from "./Pagenation";
function AllReviews({ start, end }) {
  let { par } = useParams();
  let dia = useParams();
  let ada = useParams();
  return (
    <>
      <section className="parent_section">
        <section className="product_b">
          <section className="product_outlet_parent">
            <section className="product_outlet">
              <section className="product_outlet_child">
                <Review
                  start={
                    start === ""
                      ? 6 * (Number(ada["ada"].replace("_Page", "")) - 1)
                      : start
                  }
                  end={
                    end === ""
                      ? 6 * (Number(ada["ada"].replace("_Page", "")) - 1) + 6
                      : end
                  }
                  column_class="column_reverse"
                  row_class="row_reverse j_end"
                  inner_text="Back"
                  icon_rotation="deg90"
                  text_weight="paragraph_bold"
                />
              </section>
              <section>
                <Pagenation />
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
