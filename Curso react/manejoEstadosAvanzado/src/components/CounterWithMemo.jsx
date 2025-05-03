import React,{ useCallback, useState } from "react"


const Child = React.memo(({counter})=>{
    return <p>Contador: {counter}</p>
})

function CounterWithMemmo(){
    const [counter, setCounter] = useState(0);

    //callback nos permite optimizar las aperaciones costtosas a la hora de renderizar 
    const increment = useCallback(()=>{
        setCounter(prev => prev + 1)
    })

    return(
        <div>
            <button onClick={increment}>
                Increment
            </button>
            <Child counter={counter}/>
        </div>
    )
}

export default CounterWithMemmo;