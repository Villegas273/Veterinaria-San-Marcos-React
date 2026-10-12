import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../assets/js/productos.js";

export const Productos = () => {
    return (
    <>
        <Header />
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">


        <div className="offcanvas-header">

            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">

                Carrito

            </h5>


            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
            </button>

        </div>


        <div className="offcanvas-body">

            <div id="lista-carrito"></div>

        </div>

    </div>

    <div className="container mt-4">

        <h1 className="text-primary">
            Productos
        </h1>


        <div className="row" id="Lista-productos">
        </div>

    </div>

    <Footer />
    </>
    )
}