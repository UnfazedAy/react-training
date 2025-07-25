import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import News from "../pages/News";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRouter />}>
            <Route path="" element={<News />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
