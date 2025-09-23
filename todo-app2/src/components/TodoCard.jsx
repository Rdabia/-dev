export default function TodoCard({ todo }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "20px",
      marginBottom: "20px",
      backgroundColor: todo.completed ? "#4f46e5" : "#facc15",
      boxShadow: "0 2px 5px #122620",
      color: todo.completed ? "white" : "#111"
    }}>
      <h3 style={{ margin: "0 0 5px 0" }}>{todo.title}</h3>
      <p style={{ margin: 1 }}>{todo.description}</p>
    </div>
  );
}
