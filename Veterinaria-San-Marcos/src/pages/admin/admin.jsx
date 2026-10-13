import { HeaderAdmin } from "../../components/HeaderAdmin"

import styles from "../../assets/css/admin.module.css";

export const Admin  = () => {

    return (
        <>
          <div className={styles.adminLayout}>
            <HeaderAdmin />

            <main className={`p-4 flex-grow-1 ${styles.contenido}`}>
                <h1>Bienvenido Admin 1</h1>
                <h5>Veterinaria San Marcos</h5>

                <a href="/">Volver a la página principal</a>
            </main>
        </div>
    </>
    )
}