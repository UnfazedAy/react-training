import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='about' element={<PrivateRouter />} >
              <Route index element={<About />} />
            </Route>
            <Route path='detail' element={<PrivateRouter />} >
              <Route index element={<Detail />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
