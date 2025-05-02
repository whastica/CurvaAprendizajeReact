//import styles from "./Card.module.scss"
const Card = ()=>{

    const textStyle = {
        color: "blue",
        fontSize: "2 rem",
        textAlign: "center"

    }
   return( 
        //
        //con sass <div className={styles.card}>
        //con sass <div className={styles.card}>
        //con stilos en linea <div style={{color: "blue", fontSize:"2 rem"}}>
        //Cuando son mas de 3 podemos formar una variable para mejores practicas y legibilidad
        <div style={textStyle}>
            soy una card
        </div>
    )
}

export default Card;