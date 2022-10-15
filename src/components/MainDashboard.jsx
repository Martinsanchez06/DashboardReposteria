import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"
import UltimoProducto from "./UltimoProducto"
import UltimoUsuario from "./UltimoUsuario"

const MainDashboard = () => {

    return (
        <section>
            <TotalDeProductos/>
            <TotalDeCategorias/>
            <TotalDeUsuarios/>
            <UltimoUsuario/>
            <UltimoProducto/>
        </section>
    )
}

export default MainDashboard