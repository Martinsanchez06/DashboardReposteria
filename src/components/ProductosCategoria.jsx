import { useEffect, useState } from "react"

const ProductosCategorias = () => {
    const [pCategorias, setPCategorias] = useState([])
    

    
    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/products`

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({countByCategory}) => {
                setPCategorias(countByCategory)
            })  
    }, [])

    
    return (
        <section>
        
            <h3>Productos por Categorias</h3>

            {pCategorias.map(item => <p key={item.categoria}>{`${item.categoria}: ${item.productos} producto/s`}</p>)}
        </section>
    )}


export default ProductosCategorias