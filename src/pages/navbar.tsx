import About from "./about";
import Contact from "./contact";
import Header from "./header";
import Home from "./home";
import LoginForm from "./loginform";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";

const Navbar = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home} />}></Route>
        <Route path="about" element={<ProtectedRoute Component={About} />}></Route>
        <Route path="contact" element={<ProtectedRoute Component={Contact} />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
      </Routes>
    </>
  );
};
export default Navbar;
