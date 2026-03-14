import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {

const { getTotalQuantity } = useContext(CartContext)

return (

<Link to="/cart" style={{color:"white", textDecoration:"none"}}>

🛒 {getTotalQuantity()}

</Link>

)

}

export default CartWidget