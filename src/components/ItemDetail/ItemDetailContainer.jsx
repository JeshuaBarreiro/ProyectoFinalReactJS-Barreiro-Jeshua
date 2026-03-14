import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const productoRef = doc(db, "productos", itemId)

        getDoc(productoRef)
        .then((resp) => {

            const productoFirebase = {
            id: resp.id,
            ...resp.data()
            }

            setProducto(productoFirebase)

        })

    }, [itemId])

    if (!producto) {
        return <h2>Cargando producto...</h2>
    }

    return <ItemDetail producto={producto} />

}

export default ItemDetailContainer