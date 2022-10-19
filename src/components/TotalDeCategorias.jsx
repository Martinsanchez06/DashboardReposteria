import { useEffect, useState } from "react"

const TotalDeCategorias = () => {
    const [categorias, setCategorias] = useState([])

    
    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/products`

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({countByCategory}) => {
                setCategorias(countByCategory)
            })
    }, [])

    const totalDeCategorias = categorias.length

    return (
        <section className="seccionCategorias">
            <h3 className="h3-categoriasT">Total de categorias</h3>
            <p className="p-categoriasT">{totalDeCategorias}</p>
        </section>
    )
}

export default TotalDeCategorias