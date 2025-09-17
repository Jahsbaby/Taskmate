import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api/tasks";

export default function Dashboard({ token }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(API, { headers });
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const res = await fetch(API, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title,
        description: "",
        category: "general",
        priority: "medium",
      }),
    });

    const newTask = await res.json();
    setTasks([newTask, ...tasks]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE", headers });
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const toggleComplete = async (task) => {
    const res = await fetch(`${API}/${task._id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ ...task, completed: !task.completed }),
    });
    const updatedTask = await res.json();
    setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
  };

  const filteredTasks =
    categoryFilter === "all"
      ? tasks
      : tasks.filter((t) => t.category === categoryFilter);

  const categories = ["all", "general", "work", "personal", "home"];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Taskmate Dashboard</h1>

      <form onSubmit={addTask} className="mb-4 flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
          className="flex-1 border p-2 rounded"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </form>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border p-2 rounded"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-3">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggleComplete={toggleComplete}
            />
          ))
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
}
