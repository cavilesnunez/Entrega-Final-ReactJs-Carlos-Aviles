import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc, updateDoc, doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required("Este campo es obligatorio")
                .min(3, "El nombre es muy corto")
                .max(20, "El nombre es demasiado largo"),
    direccion: Yup.string()
                .required("Este campo es obligatorio")
                .min(6, "La dirección es muy corta")
                .max(30, "La dirección es demasiado larga"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("Email inválido")
})


const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const crearOrden = async (values) => {
        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock= []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })  
                        .catch(err => console.log(err))
                })
        } else {
            alert("Hay items sin stock")
        }
       
    }

    if (orderId) {
        return (
            <div className="text-center text-base font-semibold mt-3">
                <h2 className="font-bold text-xl m-2">Tu compra se registró correctamente!</h2>
                <hr/>
                <p className="font-bold text-xl m-2">Tu número de compra es: <strong>{orderId}</strong></p>
                <div className="m-4">
                <Link to="/" className="m-10 rounded-md bg-blue-900 hover:bg-blue-700 text-white px-6 py-2 hover:no-underline">Volver al inicio</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2 className="text-center text-4xl font-semibold mt-3">Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                onSubmit={crearOrden}
                validationSchema={schema}
            >
                {() => (
                    <Form className="text-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 h-full container my-4 overflow-hidden">
                        <Field placeholder="Tu nombre" type="text" name="nombre" className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        <ErrorMessage name="nombre" component={"p"}/>
                        <Field placeholder="Tu dirección" type="text" name="direccion" className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        <ErrorMessage name="direccion" component={"p"}/>
                        <Field placeholder="Confirma tu correo electrónico" type="email" name="email" className="form-control block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        <ErrorMessage name="email" component={"p"}/>
                        <button className="mt-5 rounded-md bg-blue-900 hover:bg-blue-700 text-white px-10 py-2">Enviar</button>
                    </Form>
                )}

            </Formik>            
        </div>
    )
}

export default Checkout

