import carshop from "../../assets/carshop.png";
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <img className="w-6 mr-1 ml-5" src={carshop} />
            <div className="text-white p-0.5 ml-5 bg-purple-900 rounded-xl mr-10"><span>{totalCantidad()}</span></div>
        </Link>
    )
}

export default CartWidget






// import carshop from "../../assets/carshop.png";

// const CarWidget = () => {
//     return (
//         <div className="flex  ">
//             <img className="w-6 mr-1 ml-5" src={carshop} />
//             <div className="text-white p-0.5 bg-purple-900 rounded-xl">0</div>
//         </div>
//     );
// };

// export default CarWidget;
