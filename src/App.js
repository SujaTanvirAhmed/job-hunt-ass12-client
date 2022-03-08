// Deployed @ https://job-hunt-ass12.web.app/

// import modules
import * as React from "react";
// import { firebaseAuthState } from "./firebase-auth/FirebaseAuth";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { PrivateRoute } from "./components/PrivateRoute";

import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Home } from "./pages/home/Home";
import './App.css';
import { NotFound } from "./pages/404/NotFound";

export const App = () => {

  const [userEmail, setUserEmail] = React.useState("");

  // React.useEffect(() => {
  //   firebaseAuthState((user) => {
  //     if (user) {
  //       setUserEmail(user.email);
  //     }
  //   });
  // }, []);


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
        />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={
            userEmail === "" ? <Contact /> : <Navigate to="/" />
          } />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );

}