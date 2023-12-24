import { useState } from "react";
import files from "./assets/files";
function PasswordField({ labelValue, forValue, nameValue }) {
  let [state, setState] = useState("password");
  return (
    <section className="column gap4">
      <section>
        <label htmlFor={forValue}>{labelValue} *</label>
      </section>
      <section className="width100 row input_border align_center">
        <input
          id={forValue}
          type={state}
          name={nameValue}
          placeholder="************"
          className="width100 contact_input no_border"
          autoComplete="true"
        />
        <img
          src={state == "password" ? files.eyeSlash : files.eye}
          alt={state == "password" ? "eye slash" : "eye"}
          className="contact_input"
          onClick={() => {
            state == "password"
              ? setState((state = "text"))
              : setState((state = "password"));
          }}
        />
      </section>
    </section>
  );
}
export default PasswordField;
