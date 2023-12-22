export let NavDropDown = ({ value, position, hover, click }) => {
  return (
    <>
      <section className="nav_drop">
        <section className={`drop ${position} ${hover} ${click}`}>
          {value.map((e) => {
            return (
              <p key={e} className="gap8 paragraph drop_child">
                {e}
              </p>
            );
          })}
        </section>
      </section>
    </>
  );
};