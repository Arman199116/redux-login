import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
    return (
        <div className="headerContainer">
            <header className="header">
                <h1><span><i>Welcome To Dashboard</i></span></h1>
                <nav >
                    <div className="div-container-nav">
                        <Link to="/login">Sign in</Link>
                    </div>
                    <div className="div-container-nav">
                        <Link to="/login">Sign up</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
