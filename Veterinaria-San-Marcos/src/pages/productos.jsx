import { useEffect } from "react";
import { Header } from "../components/Header";
import { iniciarProductos } from "../assets/js/productos.js";

export const Productos = () => {
    useEffect(() => {
        iniciarProductos();
    }, []);

    return (
        <>
            <Header />
           

            <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex={-1}
                id="offcanvasScrolling"
                aria-labelledby="offcanvasScrollingLabel"
            >
                <div className="offcanvas-header">
                    <h5
                        className="offcanvas-title"
                        id="offcanvasScrollingLabel"
                    >
                        Carrito
                    </h5>

                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>

                <div className="offcanvas-body">
                    <div id="lista-carrito"></div>
                </div>
            </div>

            <main className="container mt-4">
                <h1 className="text-success">Productos</h1>

                <div className="row" id="Lista-productos"></div>
            </main>
        </>
    );
};