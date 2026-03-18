import "./Home.css";

function Home() {
    return (
        <div className="homeMain">
            <div className="hero-container">
                <div className="hero">
                    <h1 className="homeTitle">Classy Fake Shop</h1>
                    <h2 className="homeSlogan">Essentials for Classy Fake Customers</h2>
                    <a href="/shop">
                        <button className="heroButton">Shop Now</button>
                    </a>
                </div>
                <img className="background-img" src="/background.jpg" alt="store" />
            </div>
            <footer className="footerHime">
                <div className="footerMainContainer">
                    <div className="footerContainer">
                        <h3 className="footerTitle">Contact</h3>
                        <p className="footerInfo">+1 222 22222</p>
                        <p className="footerInfo">classyfakeshop@mail.com</p>
                    </div>
                    <div className="footerContainer">
                        <h3 className="footerTitle">Shipping Address</h3>
                        <p className="footerInfo">Classy Fake Shop Ltd.</p>
                        <p className="footerInfo">1234 Classy Drive</p>
                        <p className="footerInfo">Portugal</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;

////Primary/Brand	Cognac Leather	#B87333
//Secondary/Accents	Deep Mahogany	#2D1B14
//Background	Off-White Linen	#F9F7F2
//Text/Icons	Charcoal Navy	#1A1C20
