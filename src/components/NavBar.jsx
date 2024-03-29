import CartWidget from "./cartWidget.jsx";

export default function NavBar() {
    return (
        <><nav className="navbar navbar-expand-lg bg-body-tertiary navbar-style ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Dietetica Consciente</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tienda
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Frutas Secas</a></li>
                                    <li><a className="dropdown-item" href="#">Frutas deshidratadas</a></li>
                                    <li><a className="dropdown-item" href="#">Especias</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                           <CartWidget/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}