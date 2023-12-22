import './index.scss'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="contact-socmed">
            <h1>Feel free to contact us</h1>
            <div className="icons">
                <a href='https://www.instagram.com/edoyangz/' target="_blank"><img src="instagram.svg" alt="instagram" /></a>
                <a href='https://www.facebook.com/edoyangz/' target="_blank"><img src="facebook.svg" alt="facebook" /></a>
                <a href='https://github.com/edoyang' target="_blank"><img src="github.svg" alt="github" /></a>
                <a href='https://www.linkedin.com/in/edo-yang-574219249/ target="_blank"'><img src="linkedin.svg" alt="linkedin" /></a>
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