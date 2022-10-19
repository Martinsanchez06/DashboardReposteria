import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={`/`}>Dashboard Reposteria</NavLink>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" end to={`listado`}>Listado</NavLink><br/>
                            <NavLink className="nav-link" end to={`t-productos`}>Total Productos</NavLink><br/>
                            <NavLink className="nav-link" end to={`t-usuarios`}>Total Usuarios</NavLink><br/>
                            <NavLink className="nav-link" end to={`t-categorias`}>Total Categorias</NavLink><br/>
                            <NavLink className="nav-link" end to={`categoria`}>Categorias</NavLink><br/>
                            <NavLink className="nav-link" end to={`u-producto`}>Ultimo Producto</NavLink><br/>
                            <NavLink className="nav-link" end to={`u-usuario`}>Ultimo Usuario</NavLink><br/>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
  )
}

export default NavBar
