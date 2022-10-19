import React from 'react'
import { NavLink, Outlet} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand nav-link" to={`home`}>Dashboard Reposteria</NavLink>

                    <div className="navbar-nav">
                        <NavLink className="nav-link" end to={`listado`}>Listado</NavLink>
                        <NavLink className="nav-link" end to={`t-productos`}>Total Productos</NavLink>
                        <NavLink className="nav-link" end to={`t-usuarios`}>Total Usuarios</NavLink>
                        <NavLink className="nav-link" end to={`t-categorias`}>Total Categorias</NavLink>
                        <NavLink className="nav-link" end to={`categoria`}>Categorias</NavLink>
                        <NavLink className="nav-link" end to={`u-producto`}>Ultimo Producto</NavLink>
                        <NavLink className="nav-link" end to={`u-usuario`}>Ultimo Usuario</NavLink>
                    </div>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar
