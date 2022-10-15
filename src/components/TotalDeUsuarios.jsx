import { useEffect, useState } from "react"

const TotalDeUsuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    
    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/usuarios`

        fetch(url)
            .then(response => 
                response.json()
            )
            .then(({data}) => {
                setUsuarios(data)
            })
    }, [])

    const totalDeUsuarios = usuarios.length

    return (
        <section>
            
           <p>Total de usuarios: {totalDeUsuarios}</p> 

        </section>
    )
}

export default TotalDeUsuarios