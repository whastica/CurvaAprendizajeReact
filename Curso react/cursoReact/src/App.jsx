import './App.css'
import Card from './componentes/Card'

function App() {
  const items = ["React","JS","vite"]; 

  return (
    <>
      <section>
        <Card title="Card 1" description="Descripcion de la card" />
        <Card title="Card 2" description=" Otra descripcion de la card" />
        <ul>
          {
            items.map((item,index)=>(
              <li key={index}>{item}</li>
            ))
          }
        </ul>
      </section>
    </>
  )
}

export default App
