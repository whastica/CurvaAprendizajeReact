import { useEffect } from "react";
import { useState } from "react";
const UserList =()=>{
    // utilizamos en hook UseState para el manejo de datos y errores
    const [user,setUsers ] = useState([]);
    const [isloading,setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    //Utilizamos el hook UseEffect para la conexion con la API
    useEffect (()=>{
        const fetchUsers = async () => {
            try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users")
                    if(!response.ok){
                        throw new Error("Error en el acceso a datos")
                    }
                    const data = await response.json()
                    setUsers(data)
            } catch (error) {
                setError(error)
            } finally{
                setIsLoading(false);
            }
        }

        fetchUsers();
    },[])

    if(isloading){
        return <p>
            Cargando...
        </p>
    }

    if(error){
        return <p>Error:{error}</p>
    }


    return(
        <div>
            <h1>Lista de usuarios</h1>
            <ul>
            {
                user.map((user)=>(
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))       
            }
            </ul>
        </div>
    )
}

export default UserList;