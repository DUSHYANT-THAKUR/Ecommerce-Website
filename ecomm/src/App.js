import logo from "./logo.svg";
import "./App.css";
import "./common.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
