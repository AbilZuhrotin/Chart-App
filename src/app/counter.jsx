'use client'
import { useState } from "react"

export default function Counter(){
    const [counter, setCounter] = useState (1)

    const increment = () => {
        setCounter(preStave => preStave + 1)
    }

    const decrement = () => {
        if(counter > 1){
        setCounter(preStave => preStave - 1)
        }
    }

    return(
        <div className="w-20 flex justify-between">
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
