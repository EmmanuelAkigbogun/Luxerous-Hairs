import files from "./assets/files";
function UploadedImages({ booleanas }) {
  return (
    <>
      <section className=" align_center j_center relative border-rad8 border width100">
        {booleanas ? (
          <button className="absolute primary_image paragraph paragraph3 border">
            Primary Image
          </button>
        ) : (
          ""
        )}
        <img
          src={files.seller2}
          alt="product"
          className="gray uploaded_image border-rad8"
        />
        <button className="absolute delete_button">
          <img src={files.deleteIcon} alt="delete icon" className="icon" />
        </button>
      </section>
    </>
  );
}
export default UploadedImages;
