import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"
import UltimoProducto from "./UltimoProducto"
import UltimoUsuario from "./UltimoUsuario"
import ProductosCategorias from "./ProductosCategoria"

const MainDashboard = () => {

    return (
        <section>
            <TotalDeProductos/>
            <TotalDeCategorias/>
            <TotalDeUsuarios/>
            <UltimoUsuario/>
            <UltimoProducto/>
            <ProductosCategorias/>
        </section>
    )
}

export default MainDashboard