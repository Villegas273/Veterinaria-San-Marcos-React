
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { Inicio_Sesion } from "../pages/inicio-sesion";

vi.mock("../components/Header", () => ({
    Header: () => <header>Header de prueba</header>
}));

function RutaActual() {
    const location = useLocation();
    return <p>Ruta actual: {location.pathname}</p>;
}

function renderInicioSesion() {
    render(
        <MemoryRouter initialEntries={["/inicio-sesion"]}>
            <Routes>
                <Route
                    path="/inicio-sesion"
                    element={<Inicio_Sesion />}
                />
                <Route path="*" element={<RutaActual />} />
            </Routes>
        </MemoryRouter>
    );
}

function completarFormulario(email, password) {
    fireEvent.change(screen.getByLabelText("Correo electrónico"), {
        target: { value: email }
    });

    fireEvent.change(screen.getByLabelText("Contraseña"), {
        target: { value: password }
    });

    const formulario = screen.getByLabelText("Correo electrónico").closest("form");

    fireEvent.submit(formulario);
}

beforeEach(() => {
    localStorage.clear();
    vi.stubGlobal("alert", vi.fn());
});

describe("Testing del inicio de sesión", () => {
    it("debe iniciar sesión como administrador", () => {
        renderInicioSesion();

        completarFormulario("admin@duoc.cl", "Admin123");

        expect(localStorage.getItem("rol_usuario")).toBe("admin");
        expect(screen.getByText("Ruta actual: /admin")).toBeTruthy();
    });

    it("debe iniciar sesión como vendedor", () => {
        renderInicioSesion();

        completarFormulario("vendedor@duoc.cl", "Vendedor1");

        expect(localStorage.getItem("rol_usuario")).toBe("vendedor");
        expect(
            screen.getByText("Ruta actual: /admin/vendedor")
        ).toBeTruthy();
    });


    it("debe rechazar un correo de dominio no permitido", () => {
        renderInicioSesion();

        completarFormulario("usuario@yahoo.com", "Clave123");

        expect(window.alert).toHaveBeenCalledWith(
            "El correo electrónico no es válido."
        );
        expect(localStorage.getItem("rol_usuario")).toBeNull();
    });

    it("debe rechazar una contraseña demasiado corta", () => {
        renderInicioSesion();

        completarFormulario("admin@duoc.cl", "123");

        expect(window.alert).toHaveBeenCalledWith(
            "La contraseña debe tener entre 4 y 10 caracteres."
        );
        expect(localStorage.getItem("rol_usuario")).toBeNull();
    });

    it("debe rechazar una contraseña demasiado larga", () => {
        renderInicioSesion();

        completarFormulario("admin@duoc.cl", "12345678901");

        expect(window.alert).toHaveBeenCalledWith(
            "La contraseña debe tener entre 4 y 10 caracteres."
        );
        expect(localStorage.getItem("rol_usuario")).toBeNull();
    });

    it("debe rechazar credenciales incorrectas", () => {
        renderInicioSesion();

        completarFormulario("admin@duoc.cl", "Otra1234");

        expect(window.alert).toHaveBeenCalledWith(
            "Credenciales incorrectas"
        );
        expect(localStorage.getItem("rol_usuario")).toBeNull();
    });
});
