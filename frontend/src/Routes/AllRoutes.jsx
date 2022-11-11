import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import CartPage from "../Pages/CartPage";
import Error from "../Pages/Error";
import Homepage from "../Pages/Homepage";
import Kids from "../Pages/Kids";
import Mens from "../Pages/Mens";
import Payment from "../Pages/Payment";
import Profile from "../Pages/Profile";
import Review from "../Pages/Review";
import ShippingAddress from "../Pages/ShippingAddress";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Womens from "../Pages/Womens";
import PrivetRoute from "./PrivetRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/cart"
          element={
            <PrivetRoute>
              <CartPage />
            </PrivetRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivetRoute>
              <Wishlist />
            </PrivetRoute>
          }
        />
        <Route
          path="/shippingaddress"
          element={
            <PrivetRoute>
              <ShippingAddress />
            </PrivetRoute>
          }
        />
        <Route path="/review" element={<Review />} />
        <Route
          path="/singleproduct"
          element={
            <PrivetRoute>
              <SingleProduct />
            </PrivetRoute>
          }
        />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
