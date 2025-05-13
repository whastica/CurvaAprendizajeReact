import axios from 'axios'

export const getPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151',{timeout: 10000});
      return response.data.results;
    } catch (error) {
        if (error.code === "ECONNABORTED") {
            console.error("La solicitud tardó demasiado y fue abortada.");
          } else {
            console.error("Error en getPokemon:", error.message);
          }
          return [];
    }
  };