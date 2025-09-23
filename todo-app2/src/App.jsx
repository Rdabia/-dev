import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />, // <-- Navbar ve Footer buraya eklenmiş
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/todo", element: <TodosPage /> },
      { path: "/login", element: <AuthPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
