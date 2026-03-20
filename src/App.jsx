import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState([]);
	return (
		<div>
            <BrowserRouter>
            <Header cartAmount={cartItems}/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="shop" element={<Shop setCartItems={setCartItems}/>} />
                    <Route path="cart" element={<Cart cartItems = {cartItems} setCartItems ={setCartItems}/>} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
		</div>
	);
}

export default App;
