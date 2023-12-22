import { NavLink, useLocation, useParams } from "react-router-dom";
export let Grid = ({ data, bundlename, n, m }) => {
  let location = useLocation();
  //{i + 1}"img"{n}"gd"{m}"pg {4 * n + i + 20 * m}g*four+img"
  return (
    <section className="row gap30 grid">
      {data.map((a, i) => {
        return (
          <section
            className="cards relative"
            key={a.image + String(Math.random()).slice(2, 8)}
          >
            {a.boolean != "" && (
              <button
                className="absolute card_button row align_center"
                key={String(Math.random()).slice(2, 8)}
              >
                <p
                  className="heading heading3_small"
                  key={a.image + String(Math.random()).slice(2, 8)}
                >
                  {a.boolean}
                </p>
                <p className="paragraph">off</p>
              </button>
            )}
            <NavLink
              to={`/${
                location.pathname.replaceAll("%20"," ").endsWith("My Products")
                  ? "Admin/My Products"
                  : "Shop Our Bundles"
              }/${bundlename}/Product Name_Page/${4 * n + i + 20 * m}@@Static@${
                a.text
              }`}
              className="card_child"
            >
              <img
                src={a.image}
                alt={a.image}
                key={a.image + String(Math.random()).slice(2, 8)}
                className="card_image"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              />
            </NavLink>
            <section className="cards_text">
              <p
                className="pargraph paragraph0 paragraph_bold paragraph_bold_cards"
                key={a.text + String(Math.random()).slice(2, 8)}
              >
                {a.text}
              </p>
              <p
                className="paragraph"
                key={a.price + String(Math.random()).slice(2, 8)}
              >
                ${a.price}
              </p>
            </section>
            {console.log(a.boolean)}
          </section>
        );
      })}
    </section>
  );
};
