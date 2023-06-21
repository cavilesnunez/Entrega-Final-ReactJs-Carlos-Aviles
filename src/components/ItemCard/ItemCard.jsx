import { Link } from "react-router-dom"


// const ItemCard = ({item}) => {
const ItemCard = ({id, nombre, precio, descripcion, img}) => {

    return (
        <div className="">

        <div className="">
            <div className="">
                <h4 className="font-bold text-xl mb-2">{nombre}</h4>
                <img className="h-48 w-96 rounded-lg " src={img} alt={nombre}/>
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