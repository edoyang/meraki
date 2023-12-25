import './Navbar.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Cart from '../Cart/Cart';
import Search from '../Search/Search';

const Navbar = () => {
  const [activeClass, setActiveClass] = useState('');
  const [navbarClass, setNavbarClass] = useState('');
  const [bgColor, setBgColor] = useState('');

  const toggleActiveClass = () => {
    const isActive = activeClass === 'active';
    setActiveClass(isActive ? '' : 'active');
  }

  const toggleScrolledClass = () => {
    const isScrolled = navbarClass === 'scrolled';
    setNavbarClass(isScrolled ? '' : 'scrolled');
  }

  const handleScroll = () => {
    if (window.scrollY > 100 && !activeClass) {
      setNavbarClass('scrolled');
    } else if (!activeClass) {
      setNavbarClass('');
    }

    const vh80 = window.innerHeight * 0.8;
    if (window.scrollY > vh80) {
      setBgColor('white-bg');
    } else {
      setBgColor('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeClass]);

  return (
    <nav className={`navbar ${navbarClass} ${bgColor}`}>
        <div className="navbarLogo">
          <h1>MERAKI WRAP</h1>
        </div>
        <div className={`navbarMenu ${activeClass}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/planters">Planters</Link></li>
            <li className='btn-secondary'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="cart-search">
          <div className="cart">
            <Cart />
          </div>
          <div className="search">
            <Search />
          </div>
        </div>
        <div onClick={toggleActiveClass} className={`hamburger ${activeClass}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div onClick={toggleScrolledClass} className="navbar-scroll">
          <div className="animation">
            <img src="navbar-scroll.svg" alt="arrow" />
          </div>
        </div>
    </nav>
  );
}

export default Navbar;