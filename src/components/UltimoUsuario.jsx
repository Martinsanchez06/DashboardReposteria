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
        <section className="sectionUltimo">
            <h3 className="ultimoItem">Ultimo usuario</h3>
            {/* <img className="imgUltimo" src={usuario.avatar} alt="" /> */}
            <p className="ultimoItem">Nombre: {usuario.name}</p>
            <p className="ultimoItem">Email: {usuario.email}</p>
            {/* <p className="ultimoItem">Detalle:</p> */}
        </section>
    )
}

export default UltimoUsuario