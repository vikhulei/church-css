import "./header.css";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../images/logo.png"

const Header = () => {
    return(
        <nav>
            <Router>
            <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <ul>
                <HashLink className="text_link" smooth to="#top">Home</HashLink>
                <HashLink className="text_link" smooth to="#about">About</HashLink>
                <li>Services</li>
                <li>Contacts</li>
            </ul>
            </Router>
        </nav>
    )
}

export default Header;