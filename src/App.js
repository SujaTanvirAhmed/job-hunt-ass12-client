// Deployed @ https://job-hunt-ass12.web.app/
// Users registered:
// admin@admin.com pass: 123456
// test@test.com pass: test123

// import modules
import * as React from "react";
import { firebaseAuthState, logOut } from "./firebase-auth/FirebaseAuth";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { PrivateRoute } from "./components/PrivateRoute";
import { AllProducts } from "./pages/AllProducts";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Purchase } from "./pages/Purchase";

export const App = () => {

  const [userEmail, setUserEmail] = React.useState("");
  const [authenticating, setAuthenticating] = React.useState(true);
  const [userRole, setUserRole] = React.useState("");

  React.useEffect(() => {
    firebaseAuthState((user) => {
      if (user) {
        setUserEmail(user.email);
        setAuthenticating(false);
        setUserRole("admin");
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
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

}