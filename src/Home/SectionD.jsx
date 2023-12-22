import files from "../assets/files";
function SectionD() {
  return (
    <>
      <section className="section_d">
        <section className="section_d_child parent_section gap40 column">
          <h2 className="heading heading2 j_center align_center">FAQs</h2>
          <section className="column gap16 j_center align_center d_child">
            <section>
              <section className="button space_between">
                <h3 className="heading3_small heading d_heading">
                  Where is your hair sourced?
                </h3>
                <img src={files.arrowDown} alt="" />
              </section>
              <section className="button space_between">
                <h3 className="heading3_small heading d_heading">
                  What is the ideal lifestyle for wearing hair extensions?
                </h3>
                <img src={files.arrowDown} alt="" />
              </section>
              <section className="button space_between">
                <h3 className="heading3_small heading d_heading">
                  What is the difference between raw & virgin hair ?
                </h3>
                <img src={files.arrowDown} alt="" />
              </section>
              <section className="button space_between">
                <h3 className="heading3_small heading d_heading">
                  How long does the order take to prepare & ship?
                </h3>
                <img src={files.arrowDown} alt="" />
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionD;
