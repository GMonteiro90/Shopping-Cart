import "./Cart.css";
import { Link } from "react-router";

function Cart({ cartItems, setCartItems }) {
	const subtotal = cartItems.reduce((acc, item) => {
		return acc + parseFloat(item.price) * parseInt(item.amount);
	}, 0);

	const formattedTotal = subtotal.toFixed(2);
	function handleAmount(item, operation = "minus") {
		setCartItems((prev) => {
			return prev.map((element) => {
				if (item.id === element.id) {
					if (operation === "sum") {
						return { ...element, amount: parseInt(element.amount) + 1 };
					}
					if (parseInt(item.amount) === 1) {
						deleteItem(item);
					} else {
						return { ...element, amount: parseInt(element.amount) - 1 };
					}
				}
				return element;
			});
		});
	}

	function deleteItem(item) {
		setCartItems((prev) => {
			return prev.filter((element) => element.id !== item.id);
		});
	}

	if (cartItems.length > 0) {
		return (
            <div className="cart-page-container">
			<div className="shopItems">
				{cartItems.map((item) => {
					return (
						<div className="product-card" key={item.id}>
							<img src={item.image} alt={item.title} />
							<p>{item.title}</p>
							<p>{item.price} €</p>
							<p>{item.amount}</p>
							<div className="quantity-controls">
								<button onClick={() => handleAmount(item)}>-</button>
								<button onClick={() => handleAmount(item, "sum")}>+</button>
								<span className="amount-display">{item.amount}</span>
							</div>
							<button className="delete-btn" onClick={() => deleteItem(item)}>
								Delete from cart
							</button>
						</div>
					);
				})}
			</div>
            
            <div className="cart-summary">
                <div className="summary-content">
                    <h2>Total: {formattedTotal} €</h2>
                    <button className="checkout-btn" onClick={() => alert("Purchase Complete")}>Pay</button>
                </div>
            </div>
            </div>
		);
	}
	return (
		<div className="empty-cart-container">
			<h1>Shop is empty, please purchase stuff!</h1>
			<Link to="/shop">
				<button className="shop-link-btn">Shop</button>
			</Link>
		</div>
	);
}
export default Cart;
