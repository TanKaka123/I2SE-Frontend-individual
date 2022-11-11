import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import LogIn from "../pages/logIn/logIn";
import SignUp from "../pages/signUp/signUp";

const mainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default mainRoutes;
