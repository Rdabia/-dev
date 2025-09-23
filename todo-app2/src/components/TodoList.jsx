// TodoList.jsx
import { useState } from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos = [], filter, header }) {
  const [showMore, setShowMore] = useState(false);
  const filteredTodos = todos.filter(filter);
  const todosToShow = showMore ? filteredTodos : filteredTodos.slice(0, 3);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{header}</h2>
      {todosToShow.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
      {filteredTodos.length > 3 && (
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
