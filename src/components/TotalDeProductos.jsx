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
            <p>Total de productos: {totalDeProductos}</p>
        </section>
    )
}

export default TotalDeProductos