
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Blog from "./components/Blog/Blog"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Error404 from "./components/Error404/Error404"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

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
  )
}

export default App