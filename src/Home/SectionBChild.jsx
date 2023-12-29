import { useState } from "react";
import files from "../assets/files";
export let SectionBChild = ({ gaps }) => {
  let handleClick = (e) => {
    setcheck((check = e.target.htmlFor));
  };
  let [check, setcheck] = useState("b1");
  return (
    <>
      <section className={`${gaps} row flex1 b_container`}>
        <section className="flex1 align_end b_images_section">
          <section className="row gap24 b_image_gap">
            <section className="flex2 row align_center">
              <img
                src={files.brunetteSmiling}
                alt="brunette-smiling"
                className="b_images"
                style={{
                  border: `${check == "b1" ? "" : "5px solid"} ${
                    check == "b1"
                      ? ""
                      : check == "b2"
                      ? "blue"
                      : check == "b3"
                      ? "purple"
                      : "green"
                  }`,
                }}
              />
            </section>
            <section className="column gap24 flex1">
              <img
                src={files.brunetteSmiling1}
                alt="brunette-smiling1"
                className="b_images"
                style={{
                  border: `${check == "b1" ? "" : "5px solid"} ${
                    check == "b1"
                      ? ""
                      : check == "b2"
                      ? "blue"
                      : check == "b3"
                      ? "purple"
                      : "green"
                  }`,
                }}
              />
              <img
                src={files.brunetteSmiling2}
                alt="brunette-smiling2.png"
                className="b_images"
                style={{
                  border: `${check == "b1" ? "" : "5px solid"} ${
                    check == "b1"
                      ? ""
                      : check == "b2"
                      ? "blue"
                      : check == "b3"
                      ? "purple"
                      : "green"
                  }`,
                }}
              />
            </section>
          </section>
        </section>
        <section className="space_between column flex1 b_text">
          <h2 className="heading heading2 j_end text_right b_heading">
            “Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum {check}”.
          </h2>
          <section className="">
            <section className="gap16 column align_end">
              <section className="column gap8">
                <p className="paragraph paragraph0 paragraph_bold">
                  User Name {check}
                </p>
                <p className="paragraph paragraph1">User Title {check}</p>
              </section>
              <section>
                <section className="row gap24">
                  <label htmlFor="b1" className="label" onClick={handleClick}>
                    <p className={check == "b1" ? "label_child" : ""}></p>
                  </label>

                  <label htmlFor="b2" className="label" onClick={handleClick}>
                    <p className={check == "b2" ? "label_child" : ""}></p>
                  </label>

                  <label htmlFor="b3" className="label" onClick={handleClick}>
                    <p className={check == "b3" ? "label_child" : ""}></p>
                  </label>

                  <label htmlFor="b4" className="label" onClick={handleClick}>
                    <p className={check == "b4" ? "label_child" : ""}></p>
                  </label>
                </section>
                <section className="none">
                  <input type="radio" name="b" id="b1" />
                  <input type="radio" name="b" id="b2" />
                  <input type="radio" name="b" id="b3" />
                  <input type="radio" name="b" id="b4" />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
