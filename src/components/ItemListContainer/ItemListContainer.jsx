<<<<<<< HEAD
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = search
                        ? productos.filter(prod => prod.nombre.includes(search))
                        : productos

    return (
        <div className="text-1l font-semibold mt-3">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}

=======


const ItemListContainer = ({mensaje}) => {

return(
    <div className="">
        <h2 className="">Item List Container</h2>
        <hr />

        <p className="">{mensaje}</p>
    </div>
)

}
>>>>>>> 4ea478a58f83fdc4c55d670fd11b24fd937b8773
export default ItemListContainer