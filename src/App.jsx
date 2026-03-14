import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/Item/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"
import { Routes, Route } from "react-router-dom"

function App() {

return (

<>

<NavBar />

<Routes>

<Route
path="/"
element={<ItemListContainer />}
/>

<Route
path="/category/:categoryId"
element={<ItemListContainer />}
/>

<Route
path="/item/:itemId"
element={<ItemDetailContainer />}
/>

<Route
path="/cart"
element={<Cart />}
/>

<Route
path="/checkout"
element={<Checkout />}
/>

</Routes>

</>

)

}

export default App