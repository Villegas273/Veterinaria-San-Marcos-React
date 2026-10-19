
import AlimentoGatos from "../imagenes/inicio/alimento-gatos.png";
import AlimentoPerros from "../imagenes/inicio/alimento-perros.png";
import Antiparasitario from "../imagenes/inicio/antiparasito.png";

const productosIniciales = [
    {
        id: 1,
        nombre: "Alimento para perros",
        descripcion: "Comida para perros",
        precio: 15990,
        stock: 20,
        imagen: AlimentoPerros
    },
    {
        id: 2,
        nombre: "Alimento para gatos",
        descripcion: "Comida para gatos",
        precio: 12990,
        stock: 20,
        imagen: AlimentoGatos
    },
    {
        id: 3,
        nombre: "Antiparasitario",
        descripcion: "Antiparasitario para perro",
        precio: 8990,
        stock: 20,
        imagen: Antiparasitario
    }
];

export function obtenerProductos() {
    const datos = localStorage.getItem("productos");

    if (datos === null) {
        localStorage.setItem(
            "productos",
            JSON.stringify(productosIniciales)
        );

        return productosIniciales;
    }

    return JSON.parse(datos);
}

export function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}
