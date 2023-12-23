export let NavDropDown = ({ value, position, hover, click }) => {
  return (
    <>
      <section className={`drop none ${position} ${hover} ${click}`}>
        {value.map((e) => {
          return (
            <p key={e} className="gap8 paragraph drop_child">
              {e}
            </p>
          );
        })}
      </section>
    </>
  );
};
