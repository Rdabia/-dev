import { useState, useEffect } from "react";
import TodoList from "../components/TodoList";

export default function TodosPage() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch("https://66b9a5b1fa763ff550f8f787.mockapi.io/ituacm-website-ekibi/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  if (!todos) return <p>Loading todos...</p>;

  return (
    <div>
      <p>You can view your todos here:</p>
      <TodoList todos={todos} header="Ongoing Todos:" filter={t => !t.completed} />
      <TodoList todos={todos} header="Completed Todos:" filter={t => t.completed} />
    </div>
  );
}
