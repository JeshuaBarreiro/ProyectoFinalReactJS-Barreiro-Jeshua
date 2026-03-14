import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {

return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

<div className="container">

<Link className="navbar-brand fw-bold fs-4" to="/">
PC Hardware Store
</Link>

<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarNav"
>
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarNav">

<ul className="navbar-nav ms-auto align-items-center">

<li className="nav-item dropdown">

<a
className="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
>
Componentes
</a>

<ul className="dropdown-menu">

<li>
<Link className="dropdown-item" to="/category/cpu">
CPU
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/gpu">
GPU
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/ram">
RAM
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/storage">
Storage
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/motherboard">
Motherboards
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/psu">
Fuentes
</Link>
</li>

</ul>

</li>

<li className="nav-item dropdown">

<a
className="nav-link dropdown-toggle"
href="#"
role="button"
data-bs-toggle="dropdown"
>
Periféricos
</a>

<ul className="dropdown-menu">

<li>
<Link className="dropdown-item" to="/category/mouse">
Mouse
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/keyboard">
Teclados
</Link>
</li>

<li>
<Link className="dropdown-item" to="/category/monitor">
Monitores
</Link>
</li>

</ul>

</li>

<li className="nav-item">

<Link className="nav-link text-warning fw-bold" to="/category/ofertas">
Ofertas
</Link>

</li>

<li className="nav-item ms-3">

<CartWidget />

</li>

</ul>

</div>

</div>

</nav>

)

}

export default NavBar