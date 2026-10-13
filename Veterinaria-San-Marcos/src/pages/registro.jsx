import { Header } from "../components/Header";

export const Registro = () => {

    return (
        <>
        <Header />
            <div className="container mt-4">

                <h1 className="h1inicio">Registro de usuario</h1>
                <form id="form-registro">

                    <div className="mb-3">
                        <label for="run" className="form-label">RUN</label>
                        <input type="text" id="run" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input type="text" id="nombre" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label for="apellidos" className="form-label">Apellidos</label>
                        <input type="text" id="apellidos" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label for="correo" className="form-label">Correo electrónico</label>
                        <input type="email" id="correo" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label for="fecha-nacimiento" className="form-label">Fecha de nacimiento</label>
                        <input type="date" id="fecha-nacimiento" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label for="direccion" className="form-label">Dirección</label>
                        <input type="text" id="direccion" className="form-control"></input>
                    </div>

                    <div className="mb-3">
                        <label for="region" className="form-label">Región</label>
                        <select id="region" className="form-select">
                            <option value="">Seleccione una región</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label for="comuna" className="form-label">Comuna</label>
                        <select id="comuna" className="form-select">
                            <option value="">Seleccione una comuna</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-success">
                        Registrar
                    </button>

                </form>
            </div>
            </>
        );

};