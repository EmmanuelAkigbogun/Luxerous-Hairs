import OrderDetailsMain from "./OrderDetailsMain";

function AdminOrders() {
  return (
    <>
      <section className="outlet_box column log_out_pad_order">
        <section className="gap12 row mobile_column600">
          <section className="j_end flex1 align_center">
            <p className="paragraph paragraph2 paragraph_bold">View For:</p>
          </section>
          <section className="gap12 row flex1 mobile_column600">
            <section
              className="select_input input_border"
              style={{ width: "60%" }}
            >
              <select
                name=""
                id=""
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">7 days</option>
                <option value="">1 weeks</option>
                <option value="">2 weeks</option>
                <option value="">3 weeks</option>
                <option value="">2 month</option>
              </select>
            </section>
            <section className="select_input input_border width100">
              <select
                name=""
                id=""
                className="no_border contact_input1 white_bg width100"
              >
                <option value="">Raw Straight Type 1</option>
                <option value="">Raw Straight Type 2</option>
                <option value="">Raw Straight Type 3</option>
                <option value="">Raw Straight Type 4</option>
                <option value="">Raw Straight Type 5</option>
                <option value="">Raw Straight Type 6</option>
              </select>
            </section>
          </section>
        </section>
        <OrderDetailsMain pathValue="a" />
      </section>
    </>
  );
}
export default AdminOrders;
