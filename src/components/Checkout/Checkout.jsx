import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, doc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const Checkout = () => {

    const { cart, getTotalPrice, clearCart } = useContext(CartContext)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
        buyer: { name, phone, email },
        items: cart,
        total: getTotalPrice(),
        date: new Date()
    }

    const ordersCollection = collection(db, "orders")

    const docRef = await addDoc(ordersCollection, order)

    setOrderId(docRef.id)

    // descontar stock
    for (const item of cart) {

        const productRef = doc(db, "productos", item.id)

        await updateDoc(productRef, {
        stock: item.stock - item.quantity
        })

    }

    clearCart()
}

    if(orderId){
        return <h2 className="container mt-4">Compra realizada. ID: {orderId}</h2>
    }

    return (

        <div className="container mt-4">

            <h2>Finalizar compra</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-2"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <button className="btn btn-success">
                    Comprar
                </button>

            </form>

        </div>

    )

}

export default Checkout