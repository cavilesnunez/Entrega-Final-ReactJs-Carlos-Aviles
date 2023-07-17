import { useContext, useState, useMemo } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"



const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
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
            cantidad
        }
        
        agregarAlCarrito(item)
    }

    
    const handleVolver = () => {
        navigate(-1)
    }

    const fecha = useMemo(() => new Date().toLocaleString(), [cantidad])



    return (
      <div className="h-full text-center container my-4 rounded-lg overflow-hidden shadow-lg">
        <h2 className="font-bold text-xl mb-1">{nombre}</h2>

        <img
          className="mx-auto rounded-lg h-1/6 w-2/6"
          src={img}
          alt={nombre}
        />

        <div className=" m-1">
          <p className="text-gray-700 text-base mt-1">{descripcion}</p>

          <h4 className="font-bold text-xl mb-2">Precio: ${precio}</h4>

          <small className="text-gray-700 text-base">
            categoría: {category}
          </small>
        </div>
        <br />

        {isInCart(id) ? (
          <Link
            className="ml-4 mt-2 py-1.5 px-3 hover:no-underline bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            to="/cart"
          >
            Terminar mi compra
          </Link>
        ) : (
          <ItemCount
            max={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleAgregar={handleAgregar}
          />
        )}

        <hr className="m-4" />
        <button
          onClick={handleVolver}
          className="py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Volver
        </button>
      </div>
    );
}

export default ItemDetail