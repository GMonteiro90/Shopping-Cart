import { useState, useEffect } from "react";
import "./Shop.css";

function Shop({ setCartItems }) {
	const [shopItemsList, setItemsShopList] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("https://fakestoreapi.com/products");
			const data = await response.json();

			setItemsShopList(data);
		};
		fetchProducts();
	}, []);

	function addToCart(e, item) {
		item.amount = e.target[1].value;
		console.log(item);
		e.preventDefault();
		setCartItems(prev => {
			if (prev.find((element) => element.id === item.id)) {
				return prev.map((el) => {
					if (el.id === item.id) {
						return { ...el, amount: parseInt(el.amount) + parseInt(item.amount) }
					}
					return el
				})
			} 
			return [...prev, item]
		});
	}

	return (
		<div className="mainContainer">
			<div className="shopItems">
				{shopItemsList.map((item) => (
					<div key={item.id} className="product-card">
						<img src={item.image} alt={item.title} />
						<p>{item.title}</p>
						<p>{item.price} €</p>
						<form onSubmit={(e) => addToCart(e, item)}>
							<button className="buttonPlus" type="submit">+</button>
							<input type="number" max={3} defaultValue={1} min={0}/>
						</form>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;