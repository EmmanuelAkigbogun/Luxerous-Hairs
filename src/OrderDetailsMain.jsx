import { NavLink } from "react-router-dom";
import files from "./assets/files";
function OrderDetailsMain({ pathValue }) {
  let booleana = true;
  return (
    <>
      {booleana ? (
        <section className="gap16 column">
          <section className="row gap8 search_container width100">
            <section className="width100 row">
              <input
                type="search"
                placeholder="Search Products"
                className="search_input search_input1"
              />
            </section>
            <section className="search_image_container black_search">
              <img src={files.search} alt="search" className="nav_icons" />
            </section>
          </section>
          <section>
            <table className="width100">
              <thead className="thead">
                <tr className="tr">
                  <td className="td paragraph2 paragraph paragraph_bold">
                    Order NO
                  </td>
                  <td className="td paragraph2 paragraph paragraph_bold">
                    Name of Product...
                  </td>
                  <td className="td paragraph2 paragraph paragraph_bold">
                    Date
                  </td>
                  <td className="td paragraph2 paragraph paragraph_bold">
                    Price
                  </td>
                  <td className="td paragraph2 paragraph paragraph_bold">
                    Status
                  </td>
                  <td className="td paragraph2 paragraph paragraph_bold order_hide">
                    Action
                  </td>
                </tr>
              </thead>
              <tbody className="tbody">
                <tr className="tr">
                  <td className="td">
                    <p>
                      <span className="none mobile_show paragraph2 paragraph paragraph_bold">
                        Order NO:{" "}
                      </span>
                      <span className="paragraph2 paragraph">000000000</span>
                    </p>
                    <NavLink
                      className="none mobile_show paragraph2 paragraph paragraph_bold"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/1`
                          : `/Admin/My Orders/Admin View Details/1`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Product
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Name of Product...</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Date
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">
                      4th of September 2023
                    </p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Price
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">$70</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Status
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Pending Delivery</p>
                  </td>
                  <td className="td">
                    <NavLink
                      className="paragraph2 paragraph paragraph_bold order_hide"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/1`
                          : `/Admin/My Orders/Admin View Details/1`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <p>
                      <span className="none mobile_show paragraph2 paragraph paragraph_bold">
                        Order NO:{" "}
                      </span>
                      <span className="paragraph2 paragraph">000000000</span>
                    </p>
                    <NavLink
                      className="none mobile_show paragraph2 paragraph paragraph_bold"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/2`
                          : `/Admin/My Orders/Admin View Details/2`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Product
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Name of Product...</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Date
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">
                      4th of September 2023
                    </p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Price
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">$70</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Status
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Pending Delivery</p>
                  </td>
                  <td className="td">
                    <NavLink
                      className="paragraph2 paragraph paragraph_bold order_hide"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/2`
                          : `/Admin/My Orders/Admin View Details/2`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <p>
                      <span className="none mobile_show paragraph2 paragraph paragraph_bold">
                        Order NO:{" "}
                      </span>
                      <span className="paragraph2 paragraph">000000000</span>
                    </p>
                    <NavLink
                      className="none mobile_show paragraph2 paragraph paragraph_bold"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/3`
                          : `/Admin/My Orders/Admin View Details/3`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Product
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Name of Product...</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Date
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">
                      4th of September 2023
                    </p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Price
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">$70</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Status
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Pending Delivery</p>
                  </td>
                  <td className="td">
                    <NavLink
                      className="paragraph2 paragraph paragraph_bold order_hide"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/3`
                          : `/Admin/My Orders/Admin View Details/3`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <p>
                      <span className="none mobile_show paragraph2 paragraph paragraph_bold">
                        Order NO:{" "}
                      </span>
                      <span className="paragraph2 paragraph">000000000</span>
                    </p>
                    <NavLink
                      className="none mobile_show paragraph2 paragraph paragraph_bold"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/4`
                          : `/Admin/My Orders/Admin View Details/4`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Product
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Name of Product...</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Date
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">
                      4th of September 2023
                    </p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Price
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">$70</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Status
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Pending Delivery</p>
                  </td>
                  <td className="td">
                    <NavLink
                      className="paragraph2 paragraph paragraph_bold order_hide"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/4`
                          : `/Admin/My Orders/Admin View Details/4`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">
                    <p>
                      <span className="none mobile_show paragraph2 paragraph paragraph_bold">
                        Order NO:{" "}
                      </span>
                      <span className="paragraph2 paragraph">000000000</span>
                    </p>
                    <NavLink
                      className="none mobile_show paragraph2 paragraph paragraph_bold"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/5`
                          : `/Admin/My Orders/Admin View Details/5`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Product
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Name of Product...</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Date
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">
                      4th of September 2023
                    </p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Price
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">$70</p>
                  </td>
                  <td className="td">
                    <p className="none mobile_show paragraph2 paragraph paragraph_bold">
                      Status
                      <span className="none mobile_show"></span>
                    </p>
                    <p className="paragraph2 paragraph">Pending Delivery</p>
                  </td>
                  <td className="td">
                    <NavLink
                      className="paragraph2 paragraph paragraph_bold order_hide"
                      to={
                        pathValue == ""
                          ? `/Account/Order Details/view Details/5`
                          : `/Admin/My Orders/Admin View Details/5`
                      }
                    >
                      View Details
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </section>
      ) : (
        <section className="column outlet_box white_bg gap24">
          <h3 className="heading heading3">You have no orders</h3>
          <section>
            <button className="row gap10 button black button0">
              Start Shopping
            </button>
          </section>
        </section>
      )}
    </>
  );
}
export default OrderDetailsMain;
