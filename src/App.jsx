import React, { useEffect, useState } from 'react'

const API = 'http://localhost:3000/todos'

const App = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const fetchTodos = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setTodos(data)
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const addTodo = async () => {
    if (!title.trim()) return

    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    })

    setTitle('')
    fetchTodos()
  }

  const toggleTodo = async (id, completed) => {
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })

    fetchTodos()
  }

  const updateTodo = async (id) => {
    if (!editTitle.trim()) return

    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: editTitle }),
    })

    setEditingId(null)
    setEditTitle('')
    fetchTodos()
  }

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, {
      method: 'DELETE',
    })

    fetchTodos()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <main className="w-[400px] h-[420px] bg-gray-200 rounded-xl p-5 flex flex-col">
        <h1 className="text-xl font-semibold mb-4">PERN Todo App</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md outline-none border border-black bg-transparent"
          />
          <button
            onClick={addTodo}
            className="cursor-pointer px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Add
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white px-3 py-2 rounded-md flex items-center justify-between gap-2"
            >
              {editingId === todo.id ? (
                <>
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="flex-1 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className="text-green-600 text-sm"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    onClick={() => toggleTodo(todo.id, todo.completed)}
                    className={`cursor-pointer flex-1 ${
                      todo.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {todo.title}
                  </span>

                  <button
                    onClick={() => {
                      setEditingId(todo.id)
                      setEditTitle(todo.title)
                    }}
                    className="text-blue-500 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-400 text-sm"
                  >
                    ✕
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
