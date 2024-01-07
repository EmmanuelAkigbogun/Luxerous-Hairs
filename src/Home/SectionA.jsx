import { SectionAChild } from "./SectionAChild";
import data from "../assets/Bundles";
import CartItems from "../CartItems";
import OrderSummary from "../OrderSummary";

function SectionA() {
  return (
    <>
      <section className="section_a parent_section section_padding column gap104">
        <SectionAChild
          data={Object(data)}
          heading="Recent Products"
        />
        <SectionAChild
          data={Object(data)}
          heading="Shop Best Sellers"
        />
        <SectionAChild
          data={Object(data)}
          heading="Shop Haircare Products"
        />
        {
       // console.log(data[0])
        }
      </section>

    </>
  );
}
export default SectionA;
