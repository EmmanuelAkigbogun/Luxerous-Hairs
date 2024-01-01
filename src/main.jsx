import ReactDOM from "react-dom/client";
import Pages from "./Pages";
import Home from "./Home";
import Contact from "./Contact";
import Bundles from "./Bundles";
import BuyersPurchase from "./BuyersPurchase";
import BundleName from "./BundleName";
import ProductName from "./ProductName";
import { Location } from "./General/Location";
import Description from "./Description";
import Spec from "./Spec";
import Review from "./Review";
import AllReviews from "./AllReviews";
import MyCart from "./MyCart";
import Shipping from "./Shipping";
import Delivery from "./Delivery";
import Payment from "./Payment";
import CartItems from "./CartItems";
import PaymentProcess from "./PaymentProcess";
import Account from "./Account";
import AccountDetails from "./AccountDetails";
import OrderDetailsMain from "./OrderDetailsMain";
import OrderDetails from "./OrderDetails";
import ViewDetails from "./ViewDetails";
import TestimonialGrid from "./TestimonialGrid";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./style.css";
import CreateAccount from "./CreateAccount";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Admin from "./Admin";
import AdminDashBoard from "./AdminDashBoard";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import Testimonials from "./Testimonials";
import AdminProductName from "./AdminProductName";
import ViewAnalytics from "./ViewAnalytics";
import AdminViewDetails from "./AdminViewDetails";
import AdminAddDescription from "./AdminAddDescription";
import AdminAddImages from "./AdminAddImages";
import AddTestimonials from "./AddTestimonials";
import PreviewTestimonials from "./PreviewTestimonials";


function Main() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route path="Admin" element={<Admin />}>
            <Route path="" element={<AdminDashBoard />}></Route>
            <Route path="My Dashboard" element={<AdminDashBoard />}></Route>
            <Route path="My Products" element={<AdminProducts />}></Route>
            <Route
              path="My Products/View Analytics"
              element={<ViewAnalytics />}
            ></Route>
            <Route path="My Products/:shop" element={<AdminProductName />}>
              <Route path="" element={<Description />}></Route>
              <Route path="_Page_Description" element={<Description />}></Route>
              <Route path="_Page_Spec" element={<Spec />}></Route>
            </Route>
            <Route path="Description" element={<AdminAddDescription />}></Route>
            <Route path="Images" element={<AdminAddImages />}></Route>
            <Route
              path=":shop/:par/Product Name_Page/:dia"
              element={<AdminProductName />}
            >
              <Route path="" element={<Description />}></Route>
              <Route path="_Page_Description" element={<Description />}></Route>
              <Route path="_Page_Spec" element={<Spec />}></Route>
              <Route
                path="_Page_Review"
                element={
                  <Review
                    start={0}
                    end={3}
                    column_class="space_between"
                    row_class="row"
                    inner_text="See All Reviews"
                    icon_rotation="deg270"
                    text_weight=""
                  />
                }
              ></Route>
            </Route>
            <Route
              path=":shop/:par/Product Name_Page/:dia/_Page_All/:ada"
              element={<AllReviews classValue="white_bg" />}
            />
            <Route path="My Orders" element={<AdminOrders />}></Route>
            <Route
              path="My Orders/Admin View Details/:fra"
              element={<AdminViewDetails pathName="Admin View Details" />}
            ></Route>
            <Route path="Testimonials" element={<Testimonials />}>
              <Route path="" element={<TestimonialGrid />}></Route>
              <Route
                path="Add Testimonials"
                element={<AddTestimonials />}
              ></Route>
              <Route
                path="Preview Testimonials"
                element={<PreviewTestimonials />}
              ></Route>
            </Route>
          </Route>
          <Route path="/Account" element={<Account />}>
            <Route path="Account Details" element={<AccountDetails />}></Route>
            <Route path="Order Details" element={<OrderDetails />}>
              <Route
                path=""
                element={<OrderDetailsMain pathValue="" />}
              ></Route>
              <Route
                path="view Details/:deta"
                element={<ViewDetails pathName="" />}
              ></Route>
            </Route>
          </Route>
        
          <Route path="/" element={<Pages />}>
            <Route path="/Account" element={<CreateAccount />}>
              <Route path="" element={<SignUp />}></Route>
              <Route path="Sign Up" element={<SignUp />}></Route>
              <Route path="Sign In" element={<SignIn />}></Route>
              <Route
                path="Forgot Password"
                element={<ForgotPassword />}
              ></Route>
              <Route path="Reset Password" element={<ResetPassword />}></Route>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<BuyersPurchase />}>
              <Route path="Contact Us" element={<Contact />} />
              <Route path="/Shop Our Bundles" element={<Bundles />} />
              <Route
                path="/Shop Our Bundles/:par/Product Name_Page/:dia"
                element={<ProductName />}
              >
                <Route path="" element={<Description />}></Route>
                <Route
                  path="_Page_Description"
                  element={<Description />}
                ></Route>
                <Route path="_Page_Spec" element={<Spec />}></Route>
                <Route
                  path="_Page_Review"
                  element={
                    <Review
                      start={0}
                      end={3}
                      column_class="space_between"
                      row_class="row"
                      inner_text="See All Reviews"
                      icon_rotation="deg270"
                      text_weight=""
                    />
                  }
                ></Route>
              </Route>
              <Route
                path="/Shop Our Bundles/:par/Product Name_Page/:dia/_Page_All/:ada"
                element={<AllReviews classValue="" />}
              />
              <Route
                path="/Shop Our Bundles/:par/Product Name_Page/:dia/My Cart"
                element={<MyCart />}
              >
                <Route
                  path="_Page_Payment Process"
                  element={<PaymentProcess />}
                >
                  <Route path="_Page_Shipping Details" element={<Shipping />} />
                  <Route path="_Page_Delivery Method" element={<Delivery />} />
                  <Route path="_Page_Payment" element={<Payment />} />
                </Route>
                <Route path="" element={<CartItems />} />
              </Route>
              <Route path="Shop Our Bundles/My Cart" element={<MyCart />}>
                <Route
                  path="_Page_Payment Process"
                  element={<PaymentProcess />}
                >
                  <Route path="_Page_Shipping Details" element={<Shipping />} />
                  <Route path="_Page_Delivery Method" element={<Delivery />} />
                  <Route path="_Page_Payment" element={<Payment />} />
                </Route>
                <Route path="" element={<CartItems />} />
              </Route>
              <Route
                path="/Shop Our Bundles/:par/:ada"
                element={<BundleName />}
              ></Route>
              <Route
                path="/Shop Our Bundles/:par"
                element={<BundleName />}
              ></Route>
            </Route>
          </Route>
          <Route path="/cat/dog/goat/rabbit/:id" element={<Location />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Main />
  </>
);
