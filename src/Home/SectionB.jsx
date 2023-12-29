import { SectionBChild } from "./SectionBChild";
function SectionB() {
  return (
    <>
      <section className="section_b section_padding parent_section gap40 column">
        <section className="flex1">
          <h2 className="heading heading2">
            Why our Customers Love Luxurious Hairs
          </h2>
        </section>
        <section>
          <SectionBChild gaps="gap80"/>
        </section>
      </section>
    </>
  );
}
export default SectionB;
