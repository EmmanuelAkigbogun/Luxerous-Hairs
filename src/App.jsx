import Pages from "./Pages";
import Home from "./Home";
import Contact from "./Contact";
import Bundles from "./Bundles";
import BuyersPurchase from "./BuyersPurchase";
import BundleName from "./BundleName";
import ProductName from "./ProductName";
import { Test } from "./Test";
import { Location } from "./General/Location";
import Description from "./Description";
import Spec from "./Spec";
import Review from "./Review";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./style.css";
import { useState } from "react";
import { createContext } from "react";
export let ContextA = createContext();
function App() {
  let [product, setProduct] = useState({});
  let router = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<Pages />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<BuyersPurchase />}>
            <Route path="Contact" element={<Contact />} />
            <Route path="/Shop Our Bundles" element={<Bundles />} />
            <Route
              path="/Shop Our Bundles/:par/Product Name_Page/:dia"
              element={<ProductName />}
            >
              <Route path="Description" element={<Description />}></Route>
              <Route path="Spec" element={<Spec />}></Route>
              <Route path="Review" element={<Review />}></Route>
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

          <Route path="/cat/dog/goat/rabbit/:id" element={<Test />} />
          <Route path="*" element={<Location />} />
        </Route>

    )
  );
  return (
    <>
      <RouterProvider router={router}>
        <ContextA.Provider value={[product, setProduct]}></ContextA.Provider>
      </RouterProvider>
    </>
  );
}
export default App;
