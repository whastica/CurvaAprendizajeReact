import { useState } from "react";

const Counter = () => {

    const [count,setCount] = useState(0);

    return(
        <div>
            <p> Numero de Dias aprendiendo: {count}</p>
            <button onClick={()=>setCount(count+1)}>Incrementar</button>
            <button onClick={()=>setCount(count-1)}>Decrementar</button>
        </div>
        )
        
}

export default Counter;