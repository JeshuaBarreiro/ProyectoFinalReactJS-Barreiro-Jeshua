import { useState, useContext } from "react"
import { useParams, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { useEffect } from "react"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [addedToCart, setAddedToCart] = useState(false)

    const { itemId } = useParams()

    const { addItem } = useContext(CartContext)

    useEffect(() => {

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
        .then((resp) => {

            setProducto({
                id: resp.id,
                ...resp.data()
            })

        })

    }, [itemId])


    const onAdd = (quantity) => {

        addItem(producto, quantity)
        setAddedToCart(true)

    }


    if (!producto) {

        return <h2 className="container mt-4">Cargando...</h2>

    }


    return (

        <div className="container mt-4">

            <h2>{producto.nombre}</h2>

            <p>Precio: ${producto.precio}</p>

            <p>
                Stock: {producto.stock > 0 ? producto.stock : "Sin stock"}
            </p>


            {producto.stock === 0 ? (

                <h4 className="text-danger">Producto sin stock</h4>

            ) : addedToCart ? (

                <div>

                    <Link to="/cart" className="btn btn-success mt-3">
                        Ir al carrito
                    </Link>

                    <Link to="/" className="btn btn-primary mt-3 ms-3">
                        Seguir comprando
                    </Link>

                </div>

            ) : (

                <ItemCount
                    stock={producto.stock}
                    initial={1}
                    onAdd={onAdd}
                />

            )}

        </div>

    )

}

export default ItemDetailContainer