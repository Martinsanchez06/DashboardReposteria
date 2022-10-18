import { useEffect, useState } from "react"

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
            <a href={product[i].detail}>Detalle</a> </p>);
      
      }
    
    return (
        <section>
        
        <h3>Listado de Productos</h3>
           {producto}
           
        </section>
    )}


export default ListadoProductos