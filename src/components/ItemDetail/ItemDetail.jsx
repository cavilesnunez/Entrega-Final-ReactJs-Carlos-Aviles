import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../SelectTalle/SelectTalle"
import { Link, useNavigate } from "react-router-dom"



const talles = [
    {
        value: "S",
        label: "Small"
    },
    {
        value: "M",
        label: "Medium"
    },
    {
        value: "L",
        label: "Large"
    },
]

const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {
    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad, 
            talle
        }
        console.log(item)
    }

    
    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="h-full text-center container my-5 rounded-lg overflow-hidden shadow-lg">
            <h2 className="font-bold text-xl mb-2">{nombre}</h2>

            <img className="mx-auto rounded-lg" src={img} alt={nombre}/>
            <p className="text-gray-700 text-base">{descripcion}</p>

            <h4 className="font-bold text-xl mb-2">Precio: ${precio}</h4>
            <br/>
            <small className="text-gray-700 text-base">categoría: {category}</small>

            <SelectTalle 
                setSelect={setTalle}
                opciones={talles}
            />

            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <hr/>
            <button onClick={handleVolver} className="py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Volver</button>
        </div>
    )
}

export default ItemDetail