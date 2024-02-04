function SectionDChild({heading,paragraph}) {
    return (
      <>
        <section
          className="button space_between gap24 align_start wrap225 pointer"
          onClick={() => {
            state == "1" ? setState((state = "")) : setState((state = "1"));
          }}
        >
          <section className="gap16 column">
            <h3 className="heading3_small heading d_heading">
              Where is your hair sourced?
            </h3>
            <p className={`paragraph paragraph1 ${state == "1" ? "" : "none"}`}>
              Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </section>
          <img
            src={files.arrowDown}
            alt=""
            className={`${state == "1" ? "deg180" : ""}`}
          />
        </section>
      </>
    );
}
export default SectionDChild;
