import files from "./assets/files";
import { NavLink } from "react-router-dom";
import UploadCard from "./UploadCard";
import UploadedImages from "./UploadedImages";
function AdminAddImages() {
  return (
    <>
      <section className="outlet_box70 column log_out_mobile log_out_pad_image">
        <section className="gap16 column">
          <section className="gap8 column">
            <h3 className="heading heading3_small">Images and Videos</h3>
            <p className="paragraph paragraph2 upload_text width100600">
              Upload Images in JPG or PNG and Videos in MP4 format. Recommended
              resolution is 202 pixels width x 174 pixels height
            </p>
          </section>
          <section className="gap24 row mobile_column600 wrap">
            <section className="">
              <UploadCard />
            </section>
            <section className="">
              <UploadedImages booleanas={true} image={files.seller2} />
            </section>
            <section className="">
              <UploadedImages booleanas={false} image={files.seller2} />
            </section>
            <section className="">
              <UploadedImages booleanas={false} image={files.seller2} />
            </section>
            <section className="">
              <UploadedImages booleanas={false} image={files.seller2} />
            </section>
            <section className="">
              <UploadedImages booleanas={false} image={files.seller2} />
            </section>
          </section>
        </section>
        <section className="space_between gap16 flex_wrap">
          <NavLink
            className="row gap10 button button0 border white_bg nowrap"
            to={"/Admin/Description"}
          >
            <img src={files.lesserArrow} alt="arrow" />
            Back
          </NavLink>
          <NavLink
            className="row gap10 button button0 black nowrap"
            to={"/Admin/My Products/New Product"}
          >
            Preview Product
            <img src={files.greaterArrow} alt="arrow" />
          </NavLink>
        </section>
      </section>
    </>
  );
}
export default AdminAddImages;
