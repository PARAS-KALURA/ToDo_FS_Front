import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (text === "") return;
    setTodos([...todos, text]);
    setText("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Todo App
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Write something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 outline-none"
          />

          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 rounded-lg cursor-pointer"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="bg-gray-200 px-3 py-2 rounded-lg"
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
