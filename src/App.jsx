<<<<<<< HEAD
import Header from "./components/Header/Header"
import Blog from "./components/Blog/Blog"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home"
import Error404 from "./components/Error404/Error404"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element= { <ItemListContainer />} />
          <Route path="/products" element= { <ItemListContainer />} />
          <Route path="/products/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/blog" element= { <Blog />} />
          <Route path="/about" element= { <About />} />
          <Route path="/contact" element= { <Contact />} /> 
          <Route path="*" element={ <Error404 /> }  />
        </Routes>
    </BrowserRouter>
=======
import Nav from "./components/Nav/Nav"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"


function App() {
  return (
    <>
    <div className="bg-zinc-200 w-full h-screen " >

    <Nav />
    <ItemListContainer mensaje="Hola Mundo"/>
    </div>
    </>
>>>>>>> 4ea478a58f83fdc4c55d670fd11b24fd937b8773
  )
}

export default App


