// 'use client'
// import { useState } from "react"

// export default function Counter(){
//     const [counter, setCounter] = useState (1)

//     const increment = () => {
//         setCounter(preStave => preStave + 1)
//     }

//     const decrement = () => {
//         if(counter > 1){
//         setCounter(preStave => preStave - 1)
//         }
//     }

//     return(
//         <div className="w-20 flex justify-between">
//             <button onClick={decrement}>-</button>
//             <span>{counter}</span>
//             <button onClick={increment}>+</button>
//         </div>
//     )
// }

'use client'

export default function Counter(){
 
    return(
        <div className="w-20 pt-0.5 pb-0.5 pr-2.5 pl-2.5 flex justify-between border-1 border-[#706C61]">
            <button >-</button>
            <span>0</span>
            <button >+</button>
        </div>
    )
}