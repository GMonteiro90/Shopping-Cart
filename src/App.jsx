import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./Components/Header";
import "./App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {
	return (
		<div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="shop" element={<Shop/>} />
                    <Route path="cart" element={<Cart/>} />
                </Routes>
            </BrowserRouter>
		</div>
	);
}

export default App;
