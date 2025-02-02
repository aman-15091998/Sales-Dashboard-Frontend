import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Sales Analytics</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/">Dashboard 1</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/compare">Dashboard 2</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    )
}