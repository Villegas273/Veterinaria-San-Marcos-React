import { NavLink } from 'react-router-dom'


import styles from "../assets/css/admin.module.css";
export const HeaderAdmin = () => {
    return (
        <>
       <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.menuLateral}`}>
            <div className="collapse navbar-collapse show">
                <ul className={`navbar-nav flex-column text-center w-100 ${styles.lista}`}>
                    <li className="nav-item">
                        <a className="nav-link" href="/admin/productos">
                            <i className="bi bi-box-seam"></i> Productos
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/admin/usuarios">
                            <i className="bi bi-person-bounding-box"></i> Usuarios
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/admin/citas">
                            <i className="bi bi-calendar"></i> Citas
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>


    )
}