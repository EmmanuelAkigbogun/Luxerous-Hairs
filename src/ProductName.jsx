import { Outlet, useParams } from "react-router-dom";
import { SectionAChild } from "./Home/SectionAChild";
import data from "./assets/Bundles";
import ProductA from "./ProductA";
import PaginationWhite from "./General/PaginationWhite";
let list = ["Description", "Spec", "Review"];
function ProductName() {
  let { shop } = useParams();
  return (
    <>
      <ProductA />
      <section className="parent_section product_padding">
        <section className="product_b">
          <PaginationWhite list={list} directory="" />
          <section className="product_outlet_parent">
            <section className="product_outlet">
              <section className="product_outlet_child">
                <Outlet />
              </section>
              <section></section>
            </section>
            <section className="product_outlet_sibling"></section>
          </section>
        </section>
        {shop == "My Products" ? (
          ""
        ) : (
          <SectionAChild data={Object(data)} heading="Recent Products" />
        )}
      </section>
    </>
  );
}
export default ProductName;
