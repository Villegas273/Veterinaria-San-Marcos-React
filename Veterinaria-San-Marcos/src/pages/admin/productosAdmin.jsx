
import { useState } from "react";
import {
    obtenerProductos,
    guardarProductos,
} from "../../assets/js/productosData.js";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import styles from "../../assets/css/admin.module.css";
import "../../assets/js/admin"


export const ProductosAdmin = () => {
    const [productos, setProductos] = useState(() => obtenerProductos());
    const [mostrarModal, setMostrarModal] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    const formularioVacio = {
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen: "",
    };

    const [formulario, setFormulario] = useState(formularioVacio);

    const actualizarCampo = (e) => {
        const { name, value } = e.target;

        setFormulario((anterior) => ({
            ...anterior,
            [name]: value,
        }));
    };

    const abrirAgregar = () => {
        setFormulario(formularioVacio);
        setIdEditar(null);
        setMostrarModal(true);
    };

    const abrirEditar = (producto) => {
        setFormulario({
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: String(producto.precio),
            stock: String(producto.stock),
            imagen: producto.imagen || "",
        });

        setIdEditar(producto.id);
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
        setIdEditar(null);
        setFormulario(formularioVacio);
    };

    const guardarProducto = (e) => {
        e.preventDefault();

        if (
            !formulario.nombre.trim() ||
            !formulario.descripcion.trim() ||
            formulario.precio === "" ||
            formulario.stock === ""
        ) {
            alert("Completa todos los campos obligatorios.");
            return;
        }

        const precio = Number(formulario.precio);
        const stock = Number(formulario.stock);

        if (
            !Number.isFinite(precio) ||
            precio < 0 ||
            !Number.isInteger(stock) ||
            stock < 0
        ) {
            alert("Ingresa un precio y un stock válidos.");
            return;
        }

        let nuevaLista;

        if (idEditar !== null) {
            nuevaLista = productos.map((producto) =>
                producto.id === idEditar
                    ? {
                          ...producto,
                          nombre: formulario.nombre.trim(),
                          descripcion: formulario.descripcion.trim(),
                          precio,
                          stock,
                          imagen:
                              formulario.imagen.trim() ||
                              producto.imagen,
                      }
                    : producto
            );
        } else {
            const nuevoProducto = {
                id:
                    productos.length > 0
                        ? Math.max(...productos.map((p) => p.id)) + 1
                        : 1,
                nombre: formulario.nombre.trim(),
                descripcion: formulario.descripcion.trim(),
                precio,
                stock,
                imagen: formulario.imagen.trim(),
            };

            nuevaLista = [...productos, nuevoProducto];
        }

        guardarProductos(nuevaLista);
        setProductos(nuevaLista);
        cerrarModal();
    };

    const eliminarProducto = (id) => {
        const confirmar = window.confirm(
            "¿Deseas eliminar este producto?"
        );

        if (!confirmar) return;

        const nuevaLista = productos.filter(
            (producto) => producto.id !== id
        );

        guardarProductos(nuevaLista);
        setProductos(nuevaLista);
    };

    return (
        <>
        <div className={styles.adminLayout}>
        < HeaderAdmin/>
        <main className={`p-4 flex-grow-1 ${styles.contenido}`}>
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                <h1 className="text-success mb-0">
                    Administración de productos
                </h1>

                <button
                    type="button"
                    className="btn btn-success"
                    onClick={abrirAgregar}
                >
                    <i className="bi bi-plus-circle me-2"></i>
                    Agregar producto
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-success">
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.descripcion}</td>
                                <td>
                                    ${Number(producto.precio).toLocaleString("es-CL")}
                                </td>
                                <td>{producto.stock}</td>
                                <td>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-sm"
                                            onClick={() => abrirEditar(producto)}
                                        >
                                            Editar
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                eliminarProducto(producto.id)
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {productos.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-4">
                                    No hay productos registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {mostrarModal && (
                <>
                    <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="tituloModalProducto"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) {
                                cerrarModal();
                            }
                        }}
                    >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">
                                <form onSubmit={guardarProducto}>
                                    <div className="modal-header">
                                        <h2
                                            className="modal-title fs-5"
                                            id="tituloModalProducto"
                                        >
                                            {idEditar !== null
                                                ? "Editar producto"
                                                : "Agregar producto"}
                                        </h2>

                                        <button
                                            type="button"
                                            className="btn-close"
                                            aria-label="Cerrar"
                                            onClick={cerrarModal}
                                        ></button>
                                    </div>

                                    <div className="modal-body">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nombre del producto
                                            </label>
                                            <input
                                                className="form-control"
                                                name="nombre"
                                                value={formulario.nombre}
                                                onChange={actualizarCampo}
                                                required
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Descripción
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="descripcion"
                                                rows="3"
                                                value={formulario.descripcion}
                                                onChange={actualizarCampo}
                                                required
                                            />
                                        </div>

                                        <div className="row">
                                            <div className="col-6 mb-3">
                                                <label className="form-label">
                                                    Precio (CLP)
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="precio"
                                                    min="0"
                                                    step="1"
                                                    value={formulario.precio}
                                                    onChange={actualizarCampo}
                                                    required
                                                />
                                            </div>

                                            <div className="col-6 mb-3">
                                                <label className="form-label">
                                                    Stock
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="number"
                                                    name="stock"
                                                    min="0"
                                                    step="1"
                                                    value={formulario.stock}
                                                    onChange={actualizarCampo}
                                                    required
                                                />
                                            </div>
                                        </div>

                                  
                                    </div>

                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={cerrarModal}
                                        >
                                            Cancelar
                                        </button>

                                        <button
                                            type="submit"
                                            className="btn btn-success"
                                        >
                                            {idEditar !== null
                                                ? "Guardar cambios"
                                                : "Agregar producto"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div
                        className="modal-backdrop fade show"
                        onClick={cerrarModal}
                    ></div>
                
                </>
            )}
        </main>
    </div>
        </>
    );
};
