import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TasksContextProvider from "./Context/TasksContext.jsx";

createRoot(document.getElementById("root")).render(
  <TasksContextProvider>
    <App />
  </TasksContextProvider>
);
