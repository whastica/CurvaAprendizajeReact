import { useState } from "react";
const ToogleButton = () => {
    const[isActive,setIsActive] = useState(false);
    return(
        <button onClick={()=> setIsActive(!isActive)}>
            {isActive ? "Disponible" : "No Disponible"}
        </button>
    )
        
}

export default ToogleButton;