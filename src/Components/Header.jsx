import { Link } from "react-router";
import "./header.css"

function Header() {
    return (
        <div className="headerContainer">
            <Link to="/"><button>ClassyFakeShop</button></Link>
            <Link to="shop"><button>Shop</button></Link>
            <Link to="cart"><button>Cart</button></Link>
        </div>
    );
};

export default Header;