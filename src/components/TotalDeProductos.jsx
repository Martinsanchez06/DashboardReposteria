import { useEffect, useState } from "react"


const TotalDeProductos = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/products`

        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                setProducts(data)
            })
    }, [])

    const totalDeProductos = products.length

    return (
        <section>
            <h3 className="h3-productsT">Total de productos</h3>
            <p className="p-productosT">{totalDeProductos}</p>
        </section>
    )
}

export default TotalDeProductos