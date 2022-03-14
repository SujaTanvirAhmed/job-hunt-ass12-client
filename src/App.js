// Deployed @ https://job-hunt-ass12.web.app/
// Users registered:
// admin@admin.com pass: 123456
// test@test.com pass: test123

// import modules
import * as React from "react";
import axios from "axios";
import { firebaseAuthState, logOut, baseUrl } from "./firebase-auth/FirebaseAuth";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { PrivateRoute } from "./components/PrivateRoute";
import { Review } from "./components/review/Review";

import { AllProducts } from "./pages/all-products/AllProducts";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Dashboard } from "./pages/dashboard/Dashboard";
// import { DashboardReview } from "./pages/DashboardReview";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/not-found/NotFound";
import { Purchase } from "./pages/purchase/Purchase";
import { MyOrders } from "./components/my-orders/MyOrders";
import { Pay } from "./components/pay/Pay";
import { ManageOrders } from "./components/manage-orders/ManageOrders";
import { ManageProducts } from "./components/manage-products/ManageProducts";
import { AddProduct } from "./components/add-product/AddProduct";
import { MakeAdmin } from "./components/make-admin/MakeAdmin";
import "./App.css";

export const App = () => {

  const [userEmail, setUserEmail] = React.useState("");
  const [authenticating, setAuthenticating] = React.useState(true);
  const [userRole, setUserRole] = React.useState("");

  React.useEffect(() => {
    firebaseAuthState((user) => {
      if (user) {
        setUserEmail(user.email);
        setAuthenticating(false);
        axios.get(`${baseUrl}/users/?email=${user.email}`)
          .then((response) => {
            setUserRole(response.data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
      else {
        setUserEmail("");
        setAuthenticating(false);
      }
    });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUserEmail("");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }


  // const appUser = "job-hunt-ass11-user";
  // const loggedYes = "LOGGED_IN";
  // const loggedNo = "LOGGED_OUT";
  // const roleAdmin = "ADMIN";
  // const roleNone = "NONE";
  // const getInfo = () => JSON.parse(localStorage.getItem(appUser));
  // const setLogin = () => {
  //   const infoObj = { status: loggedYes, role: roleNone };
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const setLogout = () => {
  //   const infoObj = { status: loggedNo, role: roleNone };
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const setRole = (userRole) => {
  //   const infoObj = getInfo();
  //   infoObj.role = userRole.toUpperCase();
  //   localStorage.setItem(appUser, JSON.stringify(infoObj));
  // }
  // const isAuthenticated = () => {
  //   const infoObj = getInfo();
  //   return infoObj.status === loggedYes;
  // }
  // const isAdmin = () => {
  //   const infoObj = getInfo();
  //   return infoObj.role === roleAdmin;
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Header
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          handleLogOut={handleLogOut}
        />
        <Routes>

          <Route path="/" element={
            <Home userEmail={userEmail} />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/contact" element={
            userEmail === "" ? <Contact /> : <Navigate to="/" />
          } />
          <Route path="/purchase" element={<Purchase userEmail={userEmail} />} />

          <Route path="/dashboard" element={
            <PrivateRoute
              authenticating={authenticating}
              userEmail={userEmail}
            >
              <Dashboard
                userRole={userRole}
                handleLogOut={handleLogOut}
              />
            </PrivateRoute>}
          >
            <Route path="add-product" element={<AddProduct />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="manage-orders" element={<ManageOrders />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="review" element={<Review userEmail={userEmail} />} />
            <Route path="my-orders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

}