import './Footer.css'

function Footer () {
    return (
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
    )
};

export default Footer;