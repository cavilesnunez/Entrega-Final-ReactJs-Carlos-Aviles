const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }


    return (
        <div className="">
            <button onClick={handleRestar} className="py-1 px-2  bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className="py-1 px-1.5 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
            <br/>
            <button onClick={handleAgregar} className="py-1 px-3 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount