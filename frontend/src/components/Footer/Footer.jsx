import './index.scss'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="contact-socmed">
            <h1>Feel free to contact us</h1>
            <div className="icons">
                <img src="instagram.svg" alt="instagram" />
                <img src="facebook.svg" alt="facebook" />
                <img src="twitter.svg" alt="twitter" />
            </div>
            <div className="pages">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/planters">Plants</Link>
                {/* <Link to="/delivery">Delivery</Link>
                <Link to="/blog">Blog</Link> */}
                <Link to="/contact">Contact Us</Link>
            </div>
        </div>
        <p className="copyright">Copyright © 2021 Lush. All rights reserved.</p>
          <img className='vector1' src="footer1.svg" alt="vector" />
          <img className='vector2' src="footer2.svg" alt="vector" />
    </div>
  )
}

export default Footer