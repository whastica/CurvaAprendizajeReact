import useFetch from "../../hooks/useFetch";


const UserListHook = () => {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div style={{ padding: "2rem", backgroundColor: "#111", color: "#fff" }}>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserListHook;