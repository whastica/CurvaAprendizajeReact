import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { StarOutlined } from "@ant-design/icons";

const PokemonCard = ({ pokemon }) => {
  const pokemonId = pokemon.url.split("/")[6];

  return (
    <Card
      hoverable
      title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      style={{ width: "100%", height: "100%" }}
      cover={
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          alt={pokemon.name}
          style={{ width: "100%", height: "180px", objectFit: "contain", padding: "10px" }}
        />
      }
      extra={<StarOutlined style={{ fontSize: '18px', color: '#FFD700' }} />}
    >
      <Meta description="Tipo: fire, magic" />
    </Card>
  );
};

export default PokemonCard;