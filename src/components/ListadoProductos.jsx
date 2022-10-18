import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

const ListadoProductos = () => {
    const [product, setProduct] = useState([])
    

    
    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/products`

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({data}) => {
                setProduct(data)
            })
    }, [])

    let producto = [];
    

    for (let i = 0; i<product.length; i++){
        producto.push(<p>  
            Nombre: {product[i].name} <br/> 
            Descripción: {product[i].description} <br/> 
            Categoria: {product[i].category} <br/>
            <Link to={product[i].allProductDetails}>Detalle</Link> </p>);
      
      }
    
    return (
        <section>
        
        <h3>Listado de Productos</h3>
           {producto}
           
        </section>
    )}


export default ListadoProductos