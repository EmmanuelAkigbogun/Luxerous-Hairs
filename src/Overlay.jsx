function Overlay({ component }) {
  return (
    <>
      <section className="overlay">
        <section className="relative width100 height100">
          <section className="overlay_child width100 height100">
            <section className="overlay_padding width100">
              <section className="column gap32">{component}</section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}
export default Overlay;
