import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemones = [] }) => {
  return (
    <div className="pokemon-grid">
      {pokemones.length > 0 ? (
        pokemones.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))
      ) : (
        <p>No se encontraron pokemones</p>
      )}
    </div>
  );
};

export default PokemonList;