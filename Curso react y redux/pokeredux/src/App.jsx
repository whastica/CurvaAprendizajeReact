import { useEffect } from "react";
import "./App.css";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { getPokemon } from "./API";
import { setPokemons } from "./actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App() {

  const pokemons = useSelector((state)=>state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async()=>{
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="header">
        <img src={logo} alt="pokedux" className="logo" />
        <Searcher />
      </div>
        <PokemonList pokemones={pokemons} />
    </div>
  );
}

export default App;