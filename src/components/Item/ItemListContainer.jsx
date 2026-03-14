import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import ItemList from "./ItemList"
import Hero from "../Hero/Hero"
import ProductCarousel from "../ProductCarousel/ProductCarousel"

const ItemListContainer = () => {

const [productos, setProductos] = useState([])
const [loading, setLoading] = useState(true)

const { categoryId } = useParams()

useEffect(() => {

const productosRef = collection(db, "productos")

let q = productosRef

if (categoryId === "ofertas") {

q = query(productosRef, where("oferta", "==", true))

} else if (categoryId) {

q = query(productosRef, where("categoria", "==", categoryId))

}

getDocs(q)
.then((resp) => {

const productosFirebase = resp.docs.map(doc => ({
id: doc.id,
...doc.data()
}))

setProductos(productosFirebase)
setLoading(false)

})
.catch(error => console.log(error))

}, [categoryId])

if (loading) {
return <h2 className="container mt-4">Cargando productos...</h2>
}

return (

<div>

{/* HERO SOLO EN HOME */}
{!categoryId && <Hero />}

{/* CARRUSELES SOLO EN HOME */}
{!categoryId && (

<>

<ProductCarousel
titulo="Microprocesadores"
productos={productos.filter(p => p.categoria === "cpu")}
/>

<ProductCarousel
titulo="GPUs"
productos={productos.filter(p => p.categoria === "gpu")}
/>

<ProductCarousel
titulo="RAM"
productos={productos.filter(p => p.categoria === "ram")}
/>

<ProductCarousel
titulo="Motherboards"
productos={productos.filter(p => p.categoria === "motherboard")}
/>

<ProductCarousel
titulo="Fuentes"
productos={productos.filter(p => p.categoria === "psu")}
/>

<ProductCarousel
titulo="Almacenamiento"
productos={productos.filter(p => p.categoria === "storage")}
/>

<ProductCarousel
titulo="Mouse"
productos={productos.filter(p => p.categoria === "mouse")}
/>

<ProductCarousel
titulo="Teclados"
productos={productos.filter(p => p.categoria === "keyboard")}
/>

<ProductCarousel
titulo="Monitores"
productos={productos.filter(p => p.categoria === "monitor")}
/>

</>

)}

{/* LISTA NORMAL SOLO EN CATEGORÍAS */}
{categoryId && (

<div className="container mt-4">

<ItemList productos={productos} />

</div>

)}

</div>

)

}

export default ItemListContainer