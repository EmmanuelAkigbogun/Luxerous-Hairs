import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import UploadCard from "./UploadCard";
import Nav from "./General/Nav";
import SignIn from "./SignIn";
import DullChild1 from "./DullChild1";
function Dull() {
  let [s, d] = useState(window.innerWidth);
  let ref = useRef(null);
  useEffect(() => {
    window.onresize = () => {
      d(window.innerWidth);
      return console.log(s);
    };
  }, [s]);
  console.log(ref?.current?.lover());
  return (
    <>
      <SignIn />
      <DullChild1 ref={ref} />
      <button
        onClick={() => {
          ref.current?.lover();
        }}
        style={{fontSize:"24px"}}
      >
        change general color
      </button>
      {console.log("dull")}
    </>
  );
}
export default Dull;
