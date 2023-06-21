import { Link } from "react-router-dom"


// const ItemCard = ({item}) => {
const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        <div>

        <div className='flex flex-wrap  max-w-sm rounded overflow-hidden shadow-lg'>
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2">{nombre}</h4>
                <img className="w-full" src={img} alt={nombre}/>
                <p className="text-gray-700 text-base" >{descripcion}</p>
                <p className="text-gray-700 text-base" >Precio: ${precio}</p>
                <div className=" py-4">
                    <Link className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to={`/detail/${id}`}>Ver más</Link>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemCard