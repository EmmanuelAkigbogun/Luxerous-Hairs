import { NavLink } from "react-router-dom";

export let NavDropDown = ({
  value,
  position,
  hover,
  click,
  close,
  setClose,
  bagBoolean,
}) => {
  return (
    <>
      <section className={`drop relative none ${position} ${hover} ${click}`}>
        {value.map((e) => {
          return (
            <NavLink
              key={e}
              className="gap8 paragraph drop_child"
              to={
                bagBoolean
                  ? `/Shop%20Our%20Bundles/${e}/_Page1`
                  : `/Admin/My%20Products/${e}/_Page1`
              }
              onClick={() => {
                window.scrollTo(0, 0);
                close == "" ? "" : setClose((close = ""));
              }}
            >
              {e}
            </NavLink>
          );
        })}
      </section>
    </>
  );
};
