import { useEffect, useState } from "react"
// import TotalDeUsuarios from "./TotalDeUsuarios"

const UltimoUsuario = () => {
    const [usuario, setUsuario] = useState([])

    // const prueba = <TotalDeUsuarios/>

    useEffect(() => {
        const url = `https://san-jose-reposteria.herokuapp.com/api/usuarios`
        fetch(url)
            .then(response =>
                response.json()
            )
            .then(({ data }) => {
                const ultimoUsuario = data[data.length - 1]
                setUsuario(ultimoUsuario)
            })
    }, [])

    if (usuario) {
        console.log(usuario);
    }


    return (
        <section>
            <h3>Ultimo usuario</h3>
            <p>Nombre: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <p>Detalle:</p>
        </section>
    )
}

export default UltimoUsuario