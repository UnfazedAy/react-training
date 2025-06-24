import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Personnel from "./pages/Personnel";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import PersonnelDetail from "./pages/PersonnelDetail";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Paths from "./pages/Paths";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="personnel" element={<Personnel />} />
        <Route path="personnel/:id" element={<PersonnelDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>
        <Route path="paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
