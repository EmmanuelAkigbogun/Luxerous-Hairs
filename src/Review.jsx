import { NavLink, useLocation, useParams } from "react-router-dom";
import data from "./assets/Bundles";
import files from "./assets/files";
let list5 = [5, 4, 3, 2, 1];
function Review({
  start,
  end,
  row_class,
  column_class,
  icon_rotation,
  inner_text,
  text_weight,
}) {
  let dia = useParams();
  let { par } = useParams();
    let { shop } = useParams();
  let locator = useLocation();
  let a = data.filter((f) => f.text == par)[0].content[
    Number(dia["dia"].split("@@Static@")[0])
  ];
  let product = {
    review: a.reviews,
    image: a.image,
    price: a.price,
    Stars5: a.reviews.filter((e) => e.star == "5").length,
    Stars4: a.reviews.filter((e) => e.star == "4").length,
    Stars3: a.reviews.filter((e) => e.star == "3").length,
    Stars2: a.reviews.filter((e) => e.star == "2").length,
    Stars1: a.reviews.filter((e) => e.star == "1").length,
    total: a.reviews.length === 0 ? 1 : a.reviews.length * 5,
  };

  let starValue =
    String(
      ((product.Stars1 +
        product.Stars2 * 2 +
        product.Stars3 * 3 +
        product.Stars4 * 4 +
        product.Stars5 * 5) *
        5) /
        product.total
    ).slice(0, 3) + " ";
  return (
    <>
      <section className={`gap24 ${column_class} white_bg flex_wrap`}>
        <h4 className="heading heading4">Reviews</h4>

        <NavLink
          className={`gap10 align_center ${row_class}`}
          to={`/${
            shop == "My Products" ? "Admin/My Products" : "Shop Our Bundles"
          }/${par}/Product Name_Page/${dia["dia"]}/${
            locator.pathname.includes("_Page_Review")
              ? "_Page_All"
              : "_Page_Review"
          }`}
        >
          <p className={`paragraph paragraph1 nowrap ${text_weight}`}>
            {inner_text}
          </p>
          <img
            src={files.arrowDown}
            alt="right arrow"
            className={`icon ${icon_rotation}`}
          />
        </NavLink>
      </section>
      <section className="gap32 column reviews_gap white_bg">
        <section className="gap24 row align_center review_column">
          <section className="review_box">
            <section className="align_end row gap4">
              <h2 className="heading heading2">{starValue}</h2>
              <p className="paragraph paragraph2">/ 5 star</p>
            </section>
            <section>{a.reviews.length} Reviews</section>
          </section>
          <section className="gap8 column width100">
            {list5.map((e) => {
              return (
                <section
                  key={String(Math.random()).slice(2, 8)}
                  className={`row gap4 align_center width100 ${
                    eval("product.Stars" + e) != 0 ? "" : "opacity"
                  }`}
                >
                  <p key={String(Math.random()).slice(2, 8)}>{e}</p>
                  <img
                    key={String(Math.random()).slice(2, 8)}
                    src={`${
                      eval("product.Stars" + e) != 0
                        ? files.blackStar
                        : files.whiteStar
                    }`}
                    alt={`${
                      eval("product.Stars" + e) != 0
                        ? "black star"
                        : "white star"
                    }`}
                    className="icon"
                  />
                  <section
                    className="gray review_progress"
                    key={String(Math.random()).slice(2, 8)}
                  >
                    <section
                      key={String(Math.random()).slice(2, 8)}
                      className="black_bg"
                      style={{
                        width:
                          String(
                            (Number(eval("product.Stars" + e)) * 100) /
                              a.reviews.length
                          ) + "%",
                      }}
                    ></section>
                  </section>
                  {console.log(
                    String(
                      (Number(eval("product.Stars" + e)) * 100) / product.total
                    ) + "%"
                  )}
                  <p key={String(Math.random()).slice(2, 8)}>
                    {eval("product.Stars" + e)}
                  </p>
                </section>
              );
            })}
          </section>
        </section>
        {a.reviews.slice(start, end).map((f) => {
          return (
            <section
              className="column gap16 people_reviews"
              key={String(Math.random()).slice(2, 8)}
            >
              <section>
                <p
                  className="paragrah paragraph0 paragraph_bold"
                  key={String(Math.random()).slice(2, 8)}
                >
                  {f.profile}
                </p>
                <section>
                  {list5.map((e, i) => {
                    return (
                      <img
                        key={String(Math.random()).slice(2, 8)}
                        src={`${
                          Number(f.star) < Number(i + 1)
                            ? files.whiteStar
                            : files.blackStar
                        }`}
                        className="icon"
                        alt={f.star}
                      />
                    );
                  })}
                </section>
                <p
                  className="paragrah paragraph2"
                  key={String(Math.random()).slice(2, 8)}
                >
                  {f.comment}
                </p>
              </section>
              <section>
                <img
                  src={f.picture}
                  alt=""
                  className="review_image"
                  key={String(Math.random()).slice(2, 8)}
                />
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
}
export default Review;
