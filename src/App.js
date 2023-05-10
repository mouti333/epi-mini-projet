import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart/Cart";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <>
      <Navbar />
      <ReactNotifications />
      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
