function PaginationReview(params) {
  return (
    <>
      {" "}
      <section className="j_end height100 pagenation  whitish">
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page1" || ada["ada"] == undefined ? "black" : ""
          }`}
          to={`/Shop Our Bundles/${par}/_Page1`}
        >
          1
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page2" ? "black" : ""
          }`}
          to={`/Shop Our Bundles/${par}/_Page2`}
        >
          2
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page3" ? "black" : ""
          }`}
          to={`/Shop Our Bundles/${par}/_Page3`}
        >
          3
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page4" ? "black" : ""
          }`}
          to={`/Shop Our Bundles/${par}/_Page4`}
        >
          4
        </NavLink>
        <NavLink
          className={`button_pagenation ${
            ada["ada"] == "_Page5" ? "black" : ""
          }`}
          to={`/Shop Our Bundles/${par}/_Page5`}
        >
          5
        </NavLink>
      </section>
      {console.log(ada["*"], par, 89)}
    </>
  );
}
export default PaginationReview;
