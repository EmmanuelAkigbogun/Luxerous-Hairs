import { NavLink } from "react-router-dom";
import SectionD from "./Home/SectionD.jsx";
import data from "./assets/Bundles.js";
let limitValue = 7;
let modelValue = 3;
let limit = 0;
limitValue % modelValue !== 0 && limitValue > modelValue
  ? (limit = limitValue + (modelValue - (limitValue % modelValue)))
  : (limit = limitValue + 2);
function Bundles() {
  return (
    <>
      <section className="parent_section">
        <section className="row gap30 bundles_grid">
          {data.map((a, i) => {
            return i < limit ? (
              <section className="bundles_cards relative" key={a.image + i}>
                {i > limitValue - 1 ? (
                  <section className=""></section>
                ) : (
                  <NavLink
                    className="card_image"
                    to={a.text + "/_Page1"}
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={a.image}
                      alt="collecions"
                      className="card_image"
                    />
                  </NavLink>
                )}
                {i > limitValue - 1 ? (
                  <section className="whitish width100 height100"></section>
                ) : (
                  <section className="cards_text bundles_text" key={a.shop + i}>
                    <p
                      className="pargraph paragraph0 paragraph_bold paragraph_bold_cards"
                      key={i + a.text}
                    >
                      {a.text}
                    </p>
                    <section
                      className="no_border no_bg row gap8"
                      style={{ alignItems: "flex-start" }}
                    >
                      <p className="paragraph" key={i + a.shop}>
                        {a.shop}
                      </p>
                      <img
                        src={a.buttonImage}
                        alt="arrow"
                        key={a.buttonImage + i}
                      />
                    </section>
                  </section>
                )}
              </section>
            ) : (
              ""
            );
          })}
        </section>
      </section>
      <section className="bundles_d">
        <SectionD />
      </section>
      {console.log(data, 351)}
    </>
  );
}
export default Bundles;
