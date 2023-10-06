import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand" >Planning</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/modules">Modules</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/interruptions">Interruptions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/calendrier">Calendrier</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};