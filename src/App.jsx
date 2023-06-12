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
  )
}

export default App