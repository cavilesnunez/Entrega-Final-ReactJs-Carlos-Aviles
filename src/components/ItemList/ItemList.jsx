import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="text-center text-4xl font-semibold mt-3">Productos</h2>
            <hr/>
            {/* Clase de tailwind para el grid de produtos */}
            <div className="m-8 grid lg:grid-cols-3 gap-10 ">
                {
                    // items.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList