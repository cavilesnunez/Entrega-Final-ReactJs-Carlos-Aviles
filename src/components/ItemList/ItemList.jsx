import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({items}) => {

    return (
        <div>
            <h2 className="text-center text-2xl font-semibold mt-3">Productos</h2>
            <hr/>

            <div className='row'>
                {
                    // items.map((prod) => <ItemCard key={prod.id} item={prod}/>)
                    items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList