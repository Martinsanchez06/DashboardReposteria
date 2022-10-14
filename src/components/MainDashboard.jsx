import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"

const MainDashboard = () => {

    return (
        <section>
            <TotalDeProductos/>
            <TotalDeCategorias/>
            <TotalDeUsuarios/>
        </section>
    )
}

export default MainDashboard