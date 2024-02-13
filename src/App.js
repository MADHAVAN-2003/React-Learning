import "./Components/components.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
// import User from './Components/User';
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          {/* <Route path="/user/:userName" element={<User/>}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" Component={Dashboard}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
