import { Link, NavLink } from 'react-router-dom';

import logo from './images/chitter_logo.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a href="https.com" className="navbar-brand" target="_blank" rel="noreferrer">
                        <img src={logo} alt="Chitter App" width="100" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Chitter App</Link>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav">
                            <NavLink to="/post" className={(({ isActive }) => isActive ? `nav-link active` : `nav-link`)}>
                                Post Peep
                            </NavLink>
                            <NavLink to="/login" className={(({ isActive }) => isActive ? `nav-link active` : `nav-link`)}>
                                Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
