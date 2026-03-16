import { useState, useEffect } from "react";
import Header from "./Components/Header";
import './App.css'

function App() {
    const [shopItemsList, setItemsShopList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);

            return {
                id: data.id,
                name: data.title,
                price: data.price,
                description: data.descrption,
                image: data.image,
            }
        };
        fetchProducts();
    }, []);


    return (
        <div className="mainContainer">
            <div className="header">
                <Header></Header>
            </div>
            <div className="shopItems">
                {}
            </div>

        </div>
    )

}

export default App;