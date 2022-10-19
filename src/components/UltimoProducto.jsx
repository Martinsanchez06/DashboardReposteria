import { useEffect, useState } from "react"
// import TotalDeProductoUltimoProductos from "./TotalDeProductoUltimoProductos"

const UltimoProducto = () => {
    const [producto, setProducto] = useState([])

    // const prueba = <TotalDeProductos/>

    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/products`

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                const ultimoProducto = data[data.length - 1]
                setProducto(ultimoProducto)
            })
    }, [])

    if (producto) {
        console.log(producto);
    }


    return (
        <section className="sectionUltimo">
            <h3>Ultimo producto</h3>
            {/* <img className="imgUltimo" src={producto.imagen} alt="" /> */}
            <p>Nombre: {producto.name}</p>
            <p>Descripcion: {producto.description}</p>
            <p>Detalle:</p>
        </section>
    )
}

export default UltimoProducto