export default function TaskCard({ task, onDelete, onToggleComplete }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition relative">
      <h3
        className={`font-bold ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.title}
      </h3>
      <p className={`${task.completed ? "line-through text-gray-400" : ""}`}>
        {task.description}
      </p>
      <small className="block text-gray-500">
        {task.category} • {task.priority}
      </small>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => onToggleComplete(task)}
          className={`px-2 py-1 rounded text-white ${
            task.completed ? "bg-green-500" : "bg-yellow-500"
          }`}
        >
          {task.completed ? "Completed" : "Mark Complete"}
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="px-2 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
