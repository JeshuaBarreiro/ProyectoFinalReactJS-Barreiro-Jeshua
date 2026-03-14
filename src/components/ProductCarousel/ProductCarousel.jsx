import Item from "../Item/Item"

const ProductCarousel = ({ titulo, productos }) => {

if (productos.length === 0) return null

return (

<div className="container mt-5">

<h3 className="mb-3">{titulo}</h3>

<div className="row flex-nowrap overflow-auto pb-3">

{productos.map(prod => (

<div key={prod.id} className="col-10 col-md-4 col-lg-3">

<Item producto={prod} />

</div>

))}

</div>

</div>

)

}

export default ProductCarousel