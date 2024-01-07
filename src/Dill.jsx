import { NavLink } from "react-router-dom";
import SectionD from "./Home/SectionD.jsx";
import data from "./assets/Bundles.js";
let limitValue=9
function Bundles() {
  return (
    <>
      <section className="parent_section">
        <section className="row gap30 bundles_grid">
          {data.map((a, i) => {
            return i < limitValue ? (
              <section className="bundles_cards relative" key={a.image + i}>
                <NavLink
                  className="card_image"
                  to={a.text + "/_Page1"}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <img src={a.image} alt="collecions" className="card_image" />
                </NavLink>
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
