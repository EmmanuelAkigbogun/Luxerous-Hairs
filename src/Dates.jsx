import { useState } from "react";
function Dates() {
  let dateValue = new Date().toLocaleDateString().split("/");
  let dateResult =
    dateValue[2] +
    `-${dateValue[0].length < 2 && 0}` +
    dateValue[0] +
    "-" +
    dateValue[1];
  let [state, setState] = useState(dateResult);
  return (
    <>
      <input
        type="date"
        id="k"
        onChange={(e) => {
          setState((state = e.target.value));
        }}
        value={state}
      />
      {console.log(state)}
      {
        //.toLocaleDateString().... month/day/year
        //.toLocaleString().... month/day/year, hour:min:sec am
        //.toLocaleString("en-us",{weekday:"long", month:"long"})... month day
      }
      <button
        onClick={() => {
          k.showPicker();
        }}
      >
        but
      </button>
    </>
  );
}
export default Dates;
