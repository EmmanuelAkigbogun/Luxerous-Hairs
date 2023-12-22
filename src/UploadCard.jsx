import files from "./assets/files";
function UploadCard() {
  return (
    <>
      <section className="card_padding16 gap4 column align_center j_center border-rad8 upload_card uploaded_image">
        <section className="align_end">
          <img src={files.galleryAdd} alt="" />
        </section>
        <p className="paragraph paragraph2 paragraph_bold underline text_center">
          Click to upload
        </p>
        <p className="paragraph paragraph2 text_center">or drag and drop</p>
      </section>
    </>
  );
}
export default UploadCard;
