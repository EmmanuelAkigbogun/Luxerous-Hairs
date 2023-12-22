import files from "./assets/files";
function TestimonialCard({ image }) {
  return (
    <>
      <section
        style={{ width: "250px", minWidth: "100%" }}
      >
        <section className="j_center column gap16">
          <img src={image} alt="" className="border-rad8 width100" />
          <section className="row">
            <p
              className="paragraph paragraph1 width100"
              style={{ overflow: "hidden",whiteSpace:"nowrap" }}
            >
              “Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum”.
            </p>
            <p className="paragraph paragraph1">...</p>
          </section>
          <section className="j_end gap8 width100 flex_wrap">
            <p className="paragraph paragraph2 paragraph_bold">User Name</p>
            <p className="paragraph paragraph2 paragraph">User Title</p>
          </section>
        </section>
      </section>
    </>
  );
}
export default TestimonialCard;
