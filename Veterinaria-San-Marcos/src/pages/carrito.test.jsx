import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Productos } from "./productos";

vi.mock("../components/Header", () => ({
    Header: () => <header>Veterinaria San Marcos</header>,
}));

beforeEach(() => {
    localStorage.clear();
});

describe("Carrito de compras", () => {
    it("muestra los productos", () => {
        render(<Productos />);

        expect(screen.getByText("Nuestros productos")).toBeInTheDocument();
    });

    it("agrega un producto al carrito", () => {
        render(<Productos />);

        const botones = screen.getAllByRole("button", {
            name: "Añadir al carrito",
        });

        fireEvent.click(botones[0]);

        expect(
            screen.getByRole("heading", { name: "Mi carrito (1)" })
        ).toBeInTheDocument();
    });

  it("elimina un producto del carrito", () => {
    render(<Productos />);

    const botonesAgregar = screen.getAllByRole("button", {
        name: "Añadir al carrito",
    });

    fireEvent.click(botonesAgregar[0]);

    const botonesEliminar = screen.getAllByRole("button", {
        name: "Eliminar",
    });

    fireEvent.click(botonesEliminar[0]);

    expect(
        screen.getAllByText("El carrito está vacío.").length
    ).toBeGreaterThan(0);
});
});