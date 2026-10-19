
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { obtenerProductos } from "../assets/js/productosData.js";

const CLAVE_CARRITO = "carrito";

const obtenerCarritoGuardado = () => {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_CARRITO) || "[]");
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
};

export const Productos = () => {
    const [productos, setProductos] = useState(() => obtenerProductos());
    const [carrito, setCarrito] = useState(obtenerCarritoGuardado);

    // Actualizar el carrito y guardarlo en el navegador.
    useEffect(() => {
        localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    }, [carrito]);

    // Actualizar productos y carrito si cambian desde otra pestaña.
    useEffect(() => {
        const actualizarDatos = (evento) => {
            if (!evento || evento.key === "productos") {
                setProductos(obtenerProductos());
            }

            if (evento?.key === CLAVE_CARRITO) {
                setCarrito(obtenerCarritoGuardado());
            }
        };

        window.addEventListener("storage", actualizarDatos);

        return () => {
            window.removeEventListener("storage", actualizarDatos);
        };
    }, []);

    // Agregar un producto al carrito.
    const agregarAlCarrito = (producto) => {
        if (Number(producto.stock) <= 0) {
            alert("Este producto no tiene stock disponible.");
            return;
        }

        setCarrito((anterior) => {
            const cantidadEnCarrito = anterior.filter(
                (item) => item.id === producto.id
            ).length;

            if (cantidadEnCarrito >= Number(producto.stock)) {
                alert("No hay más stock disponible para este producto.");
                return anterior;
            }

            return [...anterior, { ...producto }];
        });
    };

    // Eliminar un producto del carrito.
    const eliminarProducto = (indice) => {
        setCarrito((anterior) =>
            anterior.filter((_, i) => i !== indice)
        );
    };

    // Calcular el total.
    const total = carrito.reduce(
        (suma, producto) => suma + Number(producto.precio || 0),
        0
    );

    return (
        <>
            <Header />

            {/* Carrito lateral de Bootstrap */}
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasScrolling"
                aria-labelledby="tituloCarrito"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="tituloCarrito">
                        Mi carrito ({carrito.length})
                    </h5>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Cerrar"
                    />
                </div>

                <div className="offcanvas-body">
                    {carrito.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        <>
                            {carrito.map((producto, indice) => (
                                <div
                                    className="card mb-2"
                                    key={`${producto.id}-${indice}`}
                                >
                                    <div className="card-body">
                                        <h6 className="card-title">
                                            {producto.nombre}
                                        </h6>

                                        <p className="card-text">
                                            $
                                            {Number(
                                                producto.precio
                                            ).toLocaleString("es-CL")}
                                        </p>

                                        <button
                                            type="button"
                                            className="btn btn-danger btn-sm"
                                            onClick={() =>
                                                eliminarProducto(indice)
                                            }
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <hr />

                            <h5>
                                Total: ${total.toLocaleString("es-CL")}
                            </h5>
                        </>
                    )}
                </div>
            </div>

            {/* Catálogo de productos */}
            <main className="container py-4">
                <h1 className="text-success mb-4">Nuestros productos</h1>

                <div className="row g-4">
                    {productos.map((producto) => {
                        const cantidadEnCarrito = carrito.filter(
                            (item) => item.id === producto.id
                        ).length;

                        const sinStock =
                            Number(producto.stock) <= 0 ||
                            cantidadEnCarrito >= Number(producto.stock);

                        return (
                            <div
                                className="col-12 col-sm-6 col-lg-4"
                                key={producto.id}
                            >
                                <div className="card h-100 shadow-sm">
                                    {producto.imagen && (
                                        <img
                                            src={producto.imagen}
                                            className="card-img-top p-3"
                                            alt={producto.nombre}
                                            style={{
                                                height: "220px",
                                                objectFit: "contain",
                                            }}
                                        />
                                    )}

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">
                                            {producto.nombre}
                                        </h5>

                                        <p className="card-text">
                                            {producto.descripcion}
                                        </p>

                                        <p className="text-success fw-bold">
                                            $
                                            {Number(
                                                producto.precio
                                            ).toLocaleString("es-CL")}
                                        </p>

                                        <p className="text-muted">
                                            Stock: {producto.stock}
                                        </p>

                                        <button
                                            type="button"
                                            className="btn btn-success btn-agregar mt-auto"
                                            data-id={producto.id}
                                            disabled={sinStock}
                                            onClick={() =>
                                                agregarAlCarrito(producto)
                                            }
                                        >
                                            {sinStock
                                                ? "Sin stock disponible"
                                                : "Añadir al carrito"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {productos.length === 0 && (
                    <p>No hay productos disponibles.</p>
                )}
            </main>
        </>
    );
};
