function InputField({
  labelValue,
  forValue,
  nameValue,
  typeValue,
  placeholder,
  classValue,
}) {
  return (
    <>
      <section className="column gap4">
        <section>
          <label htmlFor={forValue}>{labelValue} *</label>
        </section>
        <input
          id={forValue}
          type={typeValue}
          name={nameValue}
          placeholder={placeholder}
          className={`contact_input input_border ${classValue}`}
          autoComplete="true"
        />
      </section>
    </>
  );
}
export default InputField;