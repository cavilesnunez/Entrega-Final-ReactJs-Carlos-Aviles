import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"


const Cart = () => {
    const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="text-center container">
            <h2 className="font-bold text-xl m-4">Tu carrito está vacío</h2>
            <hr className="m-4" />
            <Link
                className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 hover:no-underline "
                to="/"
            >
                Ir a la tienda
            </Link>
            </div>
        );
    }


    return (
        <div className="h-full text-center container my-4 rounded-lg overflow-hidden shadow-lg">

            <h2 className="font-bold text-xl mb-1">Tu compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div className="">

                    <div key={prod.id} className="font-bold text-xl mb-1">
                        <h4 className="font-bold text-xl mb-1">{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} className="mx-auto rounded-lg h-1/6 w-2/6"/>
                        <p className="font-bold text-xl mb-2">Precio: ${prod.precio}</p>
                        <p className="text-gray-700 text-base">Cantidad: {prod.cantidad}</p>

                        <button 
                            className="py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            onClick={() => eliminarDelCarrito(prod.id)}
                            
                        >
                            <FaTrashAlt/>
                        </button>
                        <hr/>
                    </div>
                    </div>
                ))
            }

            <div className="">
                <h5 className="font-bold text-gray-700 text-base">Total: ${totalCompra()}</h5>
                <hr/>
                <button onClick={vaciarCarrito} className="mr-4 py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Vaciar carrito</button>
                <Link className="mr-4 py-2 px-4 bg-blue-900 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" to="/checkout">Terminar mi compra</Link>
            </div>
        </div>
    )
}

export default Cart