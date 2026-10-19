import { HeaderAdmin } from "../../components/HeaderAdmin"
import styles from "../../assets/css/admin.module.css";

export const Usuarios = () => {

    return (
        <>
    <div className={styles.adminLayout}>
        <HeaderAdmin />

        <main className={`p-4 flex-grow-1 ${styles.contenido}`}>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="fw-bold mb-1">Usuarios</h1>
                </div>
            </div>

            <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                    <div className="d-flex flex-wrap gap-2 mb-4">
                        <button
                            type="button"
                            className="btn btn-success"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalAgregar"
                        >
                            Agregar usuario
                        </button>

                        <button
                            type="button"
                            className="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalEditar"
                        >
                            Editar usuario
                        </button>

                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalEliminar"
                        >
                            Eliminar usuario
                        </button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Correo electrónico</th>
                                    <th scope="col">Contraseña</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Admin1</td>
                                    <td>admin@duoc.cl</td>
                                    <td>•••••••</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            {/* Modal Agregar */}
            <div
                className="modal fade"
                id="ModalAgregar"
                tabIndex="-1"
                aria-labelledby="modalAgregarLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">

                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="modalAgregarLabel">
                                Agregar usuario
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>

                        <div className="modal-body p-4">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="UserAgregar"
                                    placeholder="Usuario"
                                />
                                <label htmlFor="UserAgregar">Usuario</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailAgregar"
                                    placeholder="Correo"
                                />
                                <label htmlFor="EmailAgregar">Correo electrónico</label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="PasswAgregar"
                                    placeholder="Contraseña"
                                />
                                <label htmlFor="PasswAgregar">Contraseña</label>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" className="btn btn-success">
                                Agregar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Editar */}
            <div
                className="modal fade"
                id="ModalEditar"
                tabIndex="-1"
                aria-labelledby="modalEditarLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">

                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="modalEditarLabel">
                                Editar usuario
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>

                        <div className="modal-body p-4">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="UserEditar"
                                    placeholder="Usuario"
                                />
                                <label htmlFor="UserEditar">Usuario</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailEditar"
                                    placeholder="Correo"
                                />
                                <label htmlFor="EmailEditar">Correo electrónico</label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="PasswEditar"
                                    placeholder="Contraseña"
                                />
                                <label htmlFor="PasswEditar">Contraseña</label>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button type="button" className="btn btn-warning">
                                Guardar cambios
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal Eliminar */}
            <div
                className="modal fade"
                id="ModalEliminar"
                tabIndex="-1"
                aria-labelledby="modalEliminarLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow">

                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="modalEliminarLabel">
                                Eliminar usuario
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>

                        <div className="modal-body p-4">
                            <p>¿Está seguro de que desea eliminar este usuario?</p>

                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="usuarioEliminar"
                                    placeholder="ID"
                                />
                                <label htmlFor="usuarioEliminar">ID del usuario</label>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button type="button" className="btn btn-danger">
                                Eliminar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    </div>
  
    
        
        
    </>
      


    )
}