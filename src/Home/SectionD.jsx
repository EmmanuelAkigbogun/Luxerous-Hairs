import { useState } from "react";
import files from "../assets/files";
function SectionD() {
  let [state, setState] = useState("");
  return (
    <>
      <section className="section_d">
        <section className="section_d_child parent_section gap40 column">
          <h2 className="heading heading2 j_center align_center">FAQs</h2>
          <section className="column gap16 j_center align_center d_child">
            <section className="d_child_child">
              <section
                className="button space_between gap24 align_start wrap225 pointer"
                onClick={() => {
                  state == "1"
                    ? setState((state = ""))
                    : setState((state = "1"));
                }}
              >
                <section className="gap16 column">
                  <h3 className="heading3_small heading d_heading">
                    Where is your hair sourced?
                  </h3>
                  <p
                    className={`paragraph paragraph1 ${
                      state == "1" ? "" : "none"
                    }`}
                  >
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </section>
                <img
                  src={files.arrowDown}
                  alt=""
                  className={`${state == "1" ? "deg180" : ""}`}
                />
              </section>
              <section
                className="button space_between gap24 align_start wrap225 pointer"
                onClick={() => {
                  state == "2"
                    ? setState((state = ""))
                    : setState((state = "2"));
                }}
              >
                <section className="gap16 column">
                  <h3 className="heading3_small heading d_heading">
                    What is the ideal lifestyle for wearing hair extensions?
                  </h3>
                  <p
                    className={`paragraph paragraph1 ${
                      state == "2" ? "" : "none"
                    }`}
                  >
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </section>
                <img
                  src={files.arrowDown}
                  alt=""
                  className={`${state == "2" ? "deg180" : ""}`}
                />
              </section>
              <section
                className="button space_between gap24 align_start wrap225 pointer"
                onClick={() => {
                  state == "3"
                    ? setState((state = ""))
                    : setState((state = "3"));
                }}
              >
                <section className="gap16 column">
                  <h3 className="heading3_small heading d_heading">
                    What is the difference between raw & virgin hair ?
                  </h3>
                  <p
                    className={`paragraph paragraph1 ${
                      state == "3" ? "" : "none"
                    }`}
                  >
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </section>
                <img
                  src={files.arrowDown}
                  alt=""
                  className={`${state == "3" ? "deg180" : ""}`}
                />
              </section>
              <section
                className="button space_between gap24 align_start wrap225 pointer"
                onClick={() => {
                  state == "4"
                    ? setState((state = ""))
                    : setState((state = "4"));
                }}
              >
                <section className="gap16 column">
                  <h3 className="heading3_small heading d_heading">
                    How long does the order take to prepare & ship?
                  </h3>
                  <p
                    className={`paragraph paragraph1 ${
                      state == "4" ? "" : "none"
                    }`}
                  >
                    Worem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Curabitur tempus
                    urna at turpis condimentum lobortis.
                  </p>
                </section>
                <img
                  src={files.arrowDown}
                  alt=""
                  className={`${state == "4" ? "deg180" : ""}`}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionD;
