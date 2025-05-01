import { useState } from "react";

const NameForm = ()=>{
    const[name,setName] = useState("");
    return(
        <div>
            <input type="text" 
                placeholder="Ingresa Tu Nombre"
                value={name}
                onChange={(event)=>setName(event.target.value)}
            />
            <p>hola, {name|| "visitante"}</p>

        </div>
    )
        
}

export default NameForm;