import { Link } from "react-router-dom"

const Item = ({ producto }) => {

return (

<div className="card product-card position-relative">

{producto.oferta && (
<span className="badge bg-danger position-absolute m-2">
OFERTA
</span>
)}

<img
src={producto.imagen}
className="card-img-top product-img"
alt={producto.nombre}
/>

<div className="card-body">

<h5 className="card-title">
{producto.nombre}
</h5>

{producto.oferta && producto.precioOferta ? (

<div>

<span
style={{
textDecoration: "line-through",
color: "gray",
marginRight: "10px"
}}
>
${producto.precio}
</span>

<span
style={{
color: "red",
fontWeight: "bold",
fontSize: "20px"
}}
>
${producto.precioOferta}
</span>

</div>

) : (

<p className="product-price">
${producto.precio}
</p>

)}

<Link
to={`/item/${producto.id}`}
className="btn btn-dark w-100 mt-2"
>
Ver producto
</Link>

</div>

</div>

)

}

export default Item