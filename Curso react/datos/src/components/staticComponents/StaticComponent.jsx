const StaticComponent = () => {
    const items = ["monitor","mouse","teclado","torre"];

    return(
        <ul>
            {
                items.map((item, index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))       
            }
        </ul>
    )
}

export default StaticComponent;