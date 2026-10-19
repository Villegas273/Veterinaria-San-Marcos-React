import { NavLink } from 'react-router-dom'


import styles from "../assets/css/admin.module.css";
export const HeaderAdmin = () => {
    return (
        <>
       <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.menuLateral}`}>
            <div className="collapse navbar-collapse show">
                <ul className={`navbar-nav flex-column text-center w-100 ${styles.lista}`}>
                     <li className="nav-item">
                        <NavLink className="nav-link ${activePage === 'admin' ? 'active' : ''}" to="/admin"><i className="bi bi-box-seam"></i> Inicio</NavLink>
                       
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link ${activePage === 'productosAdmin' ? 'active' : ''}" to="/productosAdmin"><i className="bi bi-box-seam"></i> Productos</NavLink>
                       
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link ${activePage === 'usuarios' ? 'active' : ''}" to="/usuarios"><i className="bi bi-person-bounding-box"></i> Usuarios</NavLink>
    
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>


    )
}