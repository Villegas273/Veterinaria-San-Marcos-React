import AlimentoGatos from "../imagenes/inicio/alimento-gatos.png";
import AlimentoPerros from "../imagenes/inicio/alimento-perros.png";

const productos = [
    {
        id: 1,
        nombre: "Alimento para perros",
        precio: 15990,
        imagen: AlimentoPerros
    },
    {
        id: 2,
        nombre: "Alimento para gatos",
        precio: 12990,
        imagen: AlimentoGatos
    },
    {
        id: 3,
        nombre: "Antiparasitario",
        precio: 8990,
        imagen: "/admin/img/antiparasito.png"
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarProductos() {
    const listaProductos = document.getElementById("Lista-productos");

    if (!listaProductos) return;

    listaProductos.innerHTML = productos.map(producto => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img
                    src="${producto.imagen}"
                    class="card-img-top"
                    alt="${producto.nombre}"
                >

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>

                    <p class="card-text">
                        $${producto.precio.toLocaleString("es-CL")}
                    </p>

                    <button
                        class="btn btn-success mt-auto"
                        data-id="${producto.id}"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    `).join("");

    listaProductos.querySelectorAll("button[data-id]").forEach(boton => {
        boton.addEventListener("click", () => {
            const producto = productos.find(
                p => p.id === Number(boton.dataset.id)
            );

            if (!producto) return;

            carrito.push(producto);
            guardarCarrito();
            mostrarCarrito();
        });
    });
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");

    if (!listaCarrito) return;

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    listaCarrito.innerHTML = carrito.map((producto, indice) => `
        <div class="card mb-2">
            <div class="card-body">
                <h6>${producto.nombre}</h6>
                <p>$${producto.precio.toLocaleString("es-CL")}</p>
                <button
                    class="btn btn-danger btn-sm"
                    data-eliminar="${indice}"
                >
                    Eliminar
                </button>
            </div>
        </div>
    `).join("");

    const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

    listaCarrito.innerHTML += `
        <hr>
        <h5>Total: $${total.toLocaleString("es-CL")}</h5>
    `;

    listaCarrito.querySelectorAll("[data-eliminar]").forEach(boton => {
        boton.addEventListener("click", () => {
            carrito.splice(Number(boton.dataset.eliminar), 1);
            guardarCarrito();
            mostrarCarrito();
        });
    });
}

export function iniciarProductos() {
    mostrarProductos();
    mostrarCarrito();
}