import './App.css'
import Button from './components/Button'
import Counter from './components/Counter';

function greet (name: string): string{
  return `hola ${name}`
}


function App() {
  const handleClick = () => alert("Acabas de dar Click");
  console.log(greet("Whalen"))
  
  return (
    <>
      <Button onClick={handleClick} label="Click me" />;
      <Counter />
    </> 
  ) 

}

export default App;
