import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

function Cart() {

const { cart, removeItem, clearCart } = useContext(CartContext)

if (cart.length === 0) {
return <h2 className="container mt-4">El carrito está vacío</h2>
}

const total = cart.reduce((acc, item) => {

const precioFinal =
item.oferta && item.precioOferta
? item.precioOferta
: item.precio

return acc + precioFinal * item.quantity

}, 0)

return (

<div className="container mt-4">

<h2>Carrito</h2>

{cart.map((item) => {

const precioFinal =
item.oferta && item.precioOferta
? item.precioOferta
: item.precio

return (

<div key={item.id} className="card mb-3">

<div className="card-body">

<h5>{item.nombre}</h5>

<p>Cantidad: {item.quantity}</p>

<p>
Precio unitario: $
{precioFinal}

{item.oferta && item.precioOferta && (
<span
style={{
textDecoration:"line-through",
color:"gray",
marginLeft:"10px",
fontSize:"14px"
}}
>
${item.precio}
</span>
)}
</p>

<p>Subtotal: ${precioFinal * item.quantity}</p>

<button
className="btn btn-warning"
onClick={() => removeItem(item.id)}
>
Eliminar producto
</button>

</div>

</div>

)

})}

<h3>Total: ${total}</h3>

<button
className="btn btn-danger mt-3"
onClick={clearCart}
>
Vaciar carrito
</button>

<Link to="/checkout" className="btn btn-success mt-3 ms-3">
Finalizar compra
</Link>

</div>

)

}

export default Cart