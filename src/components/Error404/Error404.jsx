import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



const Error404 = () => {
    const [segundos, setSegundos] = useState(5)

    const navigate = useNavigate()

    useEffect(() => {
        setInterval(() => {
            setSegundos((state) => state - 1)
        }, 1000)
    }, [segundos])

    useEffect(() => {
        if (segundos === 0) navigate('/')
    }, [segundos])

    return (
        <div className="">
            <h2 className="text-center text-4xl font-semibold mt-16">404 not found</h2>
            <hr/>
            <div className="text-center mt-16">
            Será redirigido a la página de inicio en {segundos} segundos...
            </div>
        </div>
    )
}

export default Error404