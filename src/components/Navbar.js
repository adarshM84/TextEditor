import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.mode==='light'?'black':'light'}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode==='light'?'black':'light'}`} to="/">{props.heading}</Link>
                <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode==='light'?'black':'light'}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode==='light'?'black':'light'}`} aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode==='light'?'black':'light'}`} aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.mode==='light'?'black':'light'}`} aria-current="page" to="/jokes">Jokes</Link>
                        </li>
                    </ul>
                    <div>
                        <label className="switch">
                            <input type="checkbox" onClick={props.toogle}/>
                            <span className="slider"></span>
                        </label> Dark Mode
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

Navbar.propTypes = {
    heading: PropTypes.string
}
Navbar.defaultProps = {
    heading: "Text Editor"
}