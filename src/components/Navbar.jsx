import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
import '../App.css'

function Navbar() {
  const [click, setCLick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setCLick(!click);
  const closeMobileMenu = () => setCLick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fat-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu} > Home</Link>
             
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
                > Services</Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"className="nav-links"
                onClick={closeMobileMenu}
                > Product</Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"className="nav-links-mobile"
                onClick={closeMobileMenu}
                > Sign up</Link> {button && <Button buttonStyle="btn-outline">SIGN UP</Button>}
            </li>
           
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
