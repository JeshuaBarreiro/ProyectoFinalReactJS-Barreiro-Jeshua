import { useState } from "react"

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
        setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
        setCount(count - 1)
        }
    }

    return (

        <div style={{marginTop:"20px"}}>

        <button onClick={restar}>-</button>

        <span style={{margin:"0 10px"}}>
            {count}
        </span>

        <button onClick={sumar}>+</button>

        <div style={{marginTop:"10px"}}>

        <button 
            onClick={() => onAdd(count)} 
            disabled={stock === 0}
            >
            Agregar al carrito
        </button>

        </div>

        </div>

    )

}

export default ItemCount