function BlackCards({ image, paragraph, heading, width }) {
  return (
    <>
      <section className={`black_card card_padding black gap16 column ${width}`}>
        <section className="row gap12 align_center">
          <button className="button4">
            <img src={image} alt="" className="icon" />
          </button>
          <p className="paragraph paragraph0 paragraph_bold">{paragraph}</p>
        </section>
        <h2 className="heading heading2">{heading}</h2>
      </section>
    </>
  );
}
export default BlackCards;
