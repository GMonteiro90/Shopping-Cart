import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";

const routes = [
    {
        path: "shop",
        element: <Shop />,
    },
    {
        path: "cart",
        element: <Cart />,
    },
    {
        path: "/",
        element: <Home />,
    }
];

export default routes;