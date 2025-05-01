import { useEffect, useState } from "react";


const CounterWithEffect = () => {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log(`El contador cambio a: ${count}`)
    },[count])

    return(
        <div>
            <p> Numero de Dias aprendiendo: {count}</p>
            <button onClick={()=>setCount(count+1)}>Incrementar</button>
        </div>
    )
        
}

export default CounterWithEffect;