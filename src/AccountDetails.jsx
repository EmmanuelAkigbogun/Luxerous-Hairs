import files from "./assets/files";
function AccountDetails() {
  let booleana = true;
  return (
    <>
      {booleana ? (
        <section className="gap column account_details white_bg">
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">Jane Doe</p>
            </section>
            <section className="gap4 column">
              <section className="gap8 column">
                <p className="paragraph paragraph2">Janedoe@gmail.com</p>
              </section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Payment Details
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">Card</p>
              <section className="gap8 column">
                <p className="paragraph paragraph2">XXXX XXXX XXXX 0000</p>
                <p className="paragraph paragraph2">10/24</p>
                <p className="paragraph paragraph2">XXX</p>
              </section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Shipping Address
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                Default Address
              </p>
              <section className="gap8 column">
                <p className="paragraph paragraph2">Jane Doe</p>
                <p className="paragraph paragraph2">124 Porter Road</p>
                <p className="paragraph paragraph2">Country</p>
                <p className="paragraph paragraph2">State</p>
                <p className="paragraph paragraph2">Zip Code</p>
                <p className="paragraph paragraph2">City</p>
              </section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Testimonials
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                View or Edit your Testimonials
              </p>
              <section className="gap8 column">
                <p className="paragraph paragraph2"></p>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section className="gap column account_details white_bg">
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">Jane Doe</p>
            </section>
            <section className="gap4 column">
              <section className="gap8 column">
                <p className="paragraph paragraph2">Janedoe@gmail.com</p>
              </section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Payment Details
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                No Payment Details added
              </p>
              <section className="gap8 column"></section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Shipping Address
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                No Shipping Address added
              </p>
              <section className="gap8 column"></section>
            </section>
          </section>
          <section className="gap8">
            <section className="space_between">
              <p className="paragraph paragraph0 paragraph_bold">
                Testimonials
              </p>
              <img src={files.edit} alt="edit" className="icon" />
            </section>
            <section className="gap4 column">
              <p className="paragraph paragraph2 paragraph_bold">
                No Testimonials added
              </p>
              <section className="gap8 column">
                <p className="paragraph paragraph2"></p>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
}
export default AccountDetails;
