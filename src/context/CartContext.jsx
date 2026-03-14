import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {

        const itemInCart = cart.find(prod => prod.id === item.id)

        if(itemInCart){

        const newCart = cart.map(prod =>
            prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )

        setCart(newCart)

        } else {

        setCart([...cart, { ...item, quantity }])

        }

    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const getTotalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0)
    }

    return (

        <CartContext.Provider value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotalPrice
        }}>

        {children}

        </CartContext.Provider>

    )

}