import { Link } from "react-router-dom"

function Hero() {

return (

<div className="hero">

<div className="hero-content">

<h1>Las Mejores Ofertas</h1>

<p>
Descuentos en hardware y periféricos para tu PC
</p>

<Link to="/category/ofertas" className="btn btn-warning btn-lg">
Ver Ofertas
</Link>

</div>

</div>

)

}

export default Hero