import { Link } from "react-router";
import "./Header.css"

function Header( {cartAmount}) {
    function getTotalItems () {
        console.log(cartAmount)
        return cartAmount.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue.amount), 0)
    }
    return (
        <div className="headerContainer">
            <Link to="/"><button>ClassyFakeShop</button></Link>
            <Link to="shop"><button>Shop</button></Link>
            <Link to="cart"><button>Cart({getTotalItems()})</button></Link>
        </div>
    );
};

export default Header;