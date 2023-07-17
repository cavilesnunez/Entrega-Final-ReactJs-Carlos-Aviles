import Header from "../components/Header/Header"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import Blog from "../components/Blog/Blog"
// import Error404 from "../components/Error404/Error404"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Cart from "../components/Cart/Cart"
import LoginScreen from "../components/Auth/LoginScreen"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import RegisterScreen from "../components/Auth/RegisterScreen"
import Checkout from "../components/Checkout/Checkout"


const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            {
                user.logged
                ? <>
                    <Header />

                        <Routes>
                            <Route path="/" element={<ItemListContainer />} />
                            
                            <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                            <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<Navigate to="/"/>}/>
                            {/* <Route path="*" element={ <Error404 />}/> */}   
                        </Routes>
                    </>

                : <Routes>
                    <Route path="/login" element={<LoginScreen />}/>
                    <Route path="/register" element={<RegisterScreen />}/>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
            }      

        </BrowserRouter>
    )
}

export default AppRouter