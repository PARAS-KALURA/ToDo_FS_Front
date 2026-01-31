import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editedText, setEditedText] = useState("");
  
  const getTodos = async() => {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      setTodos(res.data); // Take only the todos sent by backend and store them in React state
      console.log(res.data);
      
    } catch(err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getTodos();
  }, [] );


  const onSubmitForm = async (e) => {
    e.preventDefault(); //“NO page refresh. Stay inside React.”

    try {
      await axios.post("http://localhost:3000/todos", {
        description,
        completed: false,
      });
      setDescription("");
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className='min-h-screen bg-gray-800 flex justify-center items-center ' >
      <div className='bg-gray-50 rounded-2xl shadow-xl w-full max-w-lg p-8' >
        <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>PERN TODO APP</h1>
        <form
        onSubmit={onSubmitForm}
        className='flex items-center gap-2 shadow-sm p-2' >
          <input
            className=' flex-1 outline-none  rounded px-3 py-2 text-gray-700 placeholder-gray-400 '
            type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='What needs to be done?' required />

          <button className='bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded text-white cursor-pointer' >Add Task</button>

        </form>
        <div>
  {todos.length === 0 ? (
    <p className="text-gray-600">
      No tasks available. Add a new task!
    </p>
  ) : (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
        </div>
      ))}
    </div>
  )}
</div>

      </div>
    </div>
  )
}

export default App
