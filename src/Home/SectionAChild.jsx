import { Grid } from "../General/Grid";
export let SectionAChild = ({ data, heading }) => {
  return (
    <>
      <section className="column gap40">
        <section className="j_center">
          <h2 className="heading heading2">{heading}</h2>
        </section>
        <Grid
          data={data.filter((f) => f.text == heading)[0].content.slice(0, 4)}
          bundlename={heading}
          n={0}
          m={0}
        />
      </section>
    </>
  );
};
