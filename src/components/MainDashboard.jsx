import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import TotalDeCategorias from "./TotalDeCategorias"
import TotalDeProductos from "./TotalDeProductos"
import TotalDeUsuarios from "./TotalDeUsuarios"
import UltimoProducto from "./UltimoProducto"
import UltimoUsuario from "./UltimoUsuario"
import ProductosCategorias from "./ProductosCategoria"
import ListadoProductos from "./ListadoProductos"
import NavBar from "./NavBar"


const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
      children: [
        {
          path: "listado",
          element: <ListadoProductos/>
        },
        {
          path: "t-categorias",
          element: <TotalDeCategorias/>
        },
        {
          path: "t-productos",
          element: <TotalDeProductos/>
        },
        {
          path: "t-usuarios",
          element: <TotalDeUsuarios/>
        },
        {
          path: "categoria",
          element: <ProductosCategorias/>
        },
        {
          path: "u-usuario",
          element: <UltimoUsuario/>
        },
        {
          path: "u-producto",
          element: <UltimoProducto/>
        }
      ],
      
    }
  ]);

const MainDashboard = () => {

    return (
        <section>
            <RouterProvider router={router}/>
        </section>
    )
}

export default MainDashboard