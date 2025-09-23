import { Link } from "react-router-dom";
import "../index.css";

export default function HomePage() {
  const title = "Welcome to Todo App!";

  return (
    <div className="homepage">
      <h1>
        {title.split("").map((char, i) =>
          char === " " ? (
            " " 
          ) : (
            <span key={i} className="letter">
              {char}
            </span>
          )
        )}
      </h1>
      <p>Organize your tasks easily and stay productive.</p>
      <Link to="/todo" className="todo-btn">
        Go to Todos
      </Link>
    </div>
  );
}
