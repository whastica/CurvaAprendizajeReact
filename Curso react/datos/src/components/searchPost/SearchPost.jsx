import { useState, useEffect } from 'react';

const SearchPost = () => {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((res) => {
        if (!res.ok) throw new Error('Error al buscar');
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPosts([]);
      });
  }, [query]);

  //Esta función se ejecuta cuando se presiona Enter o se hace clic en el botón
  const handleSearch = () => {
    if (input.trim()) {
      setQuery(input.trim());
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Buscar publicaciones</h2>

      <input
        type="text"
        placeholder="Buscar por título"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
        style={{ marginRight: '0.5rem' }}
      />
      <button onClick={handleSearch}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {posts.length === 0 && query && !error && <li>No hay resultados</li>}
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPost;