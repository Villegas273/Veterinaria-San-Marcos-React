
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";

export const Inicio_Sesion = () => {
    const navigate = useNavigate();

    function validarCorreo(correo) {
        if (correo === "" || correo.length > 100) {
            return false;
        }

        if (
            !correo.endsWith("@duoc.cl") &&
            !correo.endsWith("@profesor.duoc.cl") &&
            !correo.endsWith("@gmail.com")
        ) {
            return false;
        }

        return true;
    }

    function validarPassword(password) {
        if (
            password === "" ||
            password.length < 4 ||
            password.length > 10
        ) {
            return false;
        }

        return true;
    }

    function iniciarSesion(event) {
        event.preventDefault();

        const email = event.currentTarget.email.value.trim();
        const password = event.currentTarget.password.value.trim();

        if (!validarCorreo(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        if (!validarPassword(password)) {
            alert("La contraseña debe tener entre 4 y 10 caracteres.");
            return;
        }

        if (email === "admin@duoc.cl" && password === "Admin123") {
            localStorage.setItem("rol_usuario", "admin");
            navigate("/admin");
        } else if (
            email === "vendedor@duoc.cl" &&
            password === "Vendedor1"
        ) {
            localStorage.setItem("rol_usuario", "vendedor");
            navigate("/admin/vendedor");
        } else if (
            email === "cliente@gmail.com" &&
            password === "Cliente1"
        ) {
            localStorage.setItem("rol_usuario", "cliente");
            navigate("/productos");
        } else {
            alert("Credenciales incorrectas");
        }
    }

    return (
        <>
            <Header />

            <div className="container mt-4">
                <h1 className="h1inicio">Iniciar sesión</h1>

                <form onSubmit={iniciarSesion}>
                    <div className="card p-4">
                        <div className="mb-3">
                            <label
                                htmlFor="input-email"
                                className="form-label"
                            >
                                Correo electrónico
                            </label>

                            <input
                                id="input-email"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder="Ingrese su correo"
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="input-password"
                                className="form-label"
                            >
                                Contraseña
                            </label>

                            <input
                                id="input-password"
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </form>
            </div>
    </>
    );
};
