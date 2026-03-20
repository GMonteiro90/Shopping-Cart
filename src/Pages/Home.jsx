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
        </div>
    );
}

export default Home;