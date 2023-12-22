import { SectionCChild } from "./SectionCChild";
import data from "../assets/sectionC";
function SectionC() {
  return (
    <>
      <section className="section_a parent_section section_padding column gap104">
        <SectionCChild heading={Object.keys(data[0])[0]} data={data} />
      </section>
    </>
  );
}
export default SectionC;
