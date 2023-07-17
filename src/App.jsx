
import { CartProvider } from "./context/CartContext"
import { AuthContextProvider } from "./context/AuthContext"
import AppRouter from "./router/AppRouter"


function App() {
  
  return (
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  )
}

export default App