import { useState, useEffect } from "react";
import "./Shop.css";

function Shop() {
	const [shopItemsList, setItemsShopList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();
			console.log(data);

			setItemsShopList(data);
		};
		fetchProducts();
	}, []);

	return (
		<div className="mainContainer">
			<div className="shopItems">
				{shopItemsList.map((item) => (
					<div key={item.id} className="product-card">
						<img src={item.image} alt={item.title} />
						<p>{item.title}</p>
						<p>{item.price} €</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;