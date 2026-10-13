import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Contacto = () => {

    return (
        <>
        <Header />
            <div className="container">

                <div className="container mt-4">

                    <h1 className="h1inicio">Contacto</h1>

                    <div className="card mt-4">

                        <div className="card-body">

                            <h3>Envíanos un mensaje</h3>

                            <form id="form-contacto">

                                <div className="mb-3">
                                    <label for="nombre" className="form-label">Nombre</label>
                                    <input type="text" id="nombre" className="form-control"></input>
                                </div>

                                <div className="mb-3">
                                    <label for="correo" className="form-label">Correo electrónico</label>
                                    <input type="email" id="correo" className="form-control"></input>
                                </div>

                                <div className="mb-3">
                                    <label for="mensaje" className="form-label">Mensaje</label>
                                    <textarea id="mensaje" className="form-control" rows="5"></textarea>
                                </div>

                                <button type="submit" className="btn btn-success">
                                    Enviar mensaje
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
       </>

        )
}