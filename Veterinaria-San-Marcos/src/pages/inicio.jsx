
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import AlimentoGatos from "../assets/imagenes/inicio/alimento-gatos.png";
import AlimentoPerro from "../assets/imagenes/inicio/alimento-perros.png";
import Antiparaisto from "../assets/imagenes/inicio/antiparasito.png";


import "../assets/css/index.css"


export const Inicio = () => {
    return (

        <>
            <Header />
         
            <main>
                <h1>Veterinaria San Marcos</h1>

                <p className="lead">
                    Cuidamos a tus mascotas como parte de nuestra familia.<br />
                    Atención veterinaria y productos para el bienestar de perros y gatos.
                </p>

                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={AlimentoGatos}
                                className="d-block w-100"
                                alt="Alimento para gatos"
                            />
                        </div>

                        <div className="carousel-item">
                            <img
                                src={AlimentoPerro}
                                className="d-block w-100"
                                alt="Antiparasitario"
                            />
                        </div>
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Anterior</span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </main>
        <Footer />
        </>
    );

};