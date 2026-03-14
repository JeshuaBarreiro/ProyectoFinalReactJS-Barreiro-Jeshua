import { Link, NavLink } from "react-router-dom"
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
<NavLink
to="/category/cpu"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
CPU
</NavLink>
</li>

<li>
<NavLink
to="/category/gpu"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
GPU
</NavLink>
</li>

<li>
<NavLink
to="/category/ram"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
RAM
</NavLink>
</li>

<li>
<NavLink
to="/category/storage"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Storage
</NavLink>
</li>

<li>
<NavLink
to="/category/motherboard"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Motherboards
</NavLink>
</li>

<li>
<NavLink
to="/category/psu"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Fuentes
</NavLink>
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
<NavLink
to="/category/mouse"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Mouse
</NavLink>
</li>

<li>
<NavLink
to="/category/keyboard"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Teclados
</NavLink>
</li>

<li>
<NavLink
to="/category/monitor"
className={({ isActive }) =>
"dropdown-item " + (isActive ? "active" : "")
}
>
Monitores
</NavLink>
</li>

</ul>

</li>

<li className="nav-item">

<NavLink
to="/category/ofertas"
className={({ isActive }) =>
"nav-link text-warning fw-bold " + (isActive ? "active" : "")
}
>
Ofertas
</NavLink>

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