import TestimonialCard from "./TestimonialCard";
import files from "./assets/files";
function TestimonialGrid() {
  let booleana = true;
  return (
    <>
      {booleana ? (
        <section className="gap32 row flex_wrap">
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
          <section className="flex1 j_center width100">
            <TestimonialCard image={files.brunetteSmiling} />
          </section>
        </section>
      ) : (
        <>
          <section>
            <p
              className="paragraph paragraph1"
              style={{ paddingBlockStart: "40px" }}
            >
              No Testimonials Added Yet
            </p>
          </section>
        </>
      )}
    </>
  );
}
export default TestimonialGrid;
