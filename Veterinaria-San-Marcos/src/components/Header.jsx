import { NavLink } from 'react-router-dom'

import "../assets/css/index.css"
export const Header = () => {
    return (
          <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

               

            </button>


            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav mx-auto">

                    <li className="nav-item">

                        <NavLink className="nav-link ${activePage === 'inicio' ? 'active' : ''}" to="/">Home</NavLink>

                    </li>


                    <li className="nav-item">

                        <NavLink className="nav-link ${activePage === 'productos' ? 'active' : ''}" to="/productos">Productos</NavLink>

                    </li>
                    
                    <li className="nav-item">

                        <NavLink className="nav-link ${activePage === 'Inicio-Sesion' ? 'active' : ''}" to="/inicio-sesion">Inicio Sesion</NavLink>

                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link ${activePage === 'Registro' ? 'active' : ''}" to="/registro">Registro</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link ${activePage === 'Contacto' ? 'active' : ''}" to="/contacto">Contacto</NavLink>
                    </li>


                    <li className="nav-item">

                        <button className="btn bg-body-tertiary" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">

                            <i className="bi bi-cart"></i>

                        </button>

                    </li>

                </ul>

            </div>

        </div>

    </nav>
    );
};