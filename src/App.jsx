import React, { useState } from 'react'

const App = () => {

  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editedText, setEditedText] = useState("");
  
  const onSubmitForm = async(e) => {
    e.preventDefault;
    
    try{

    }  catch(err) {
      console.error(err.message);
      
    }

  }

  return (
    <div className='min-h-screen bg-gray-800 flex justify-center items-center ' >
      <div className='bg-gray-50 rounded-2xl shadow-xl w-full max-w-lg p-8' >
        <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>PERN TODO APP</h1>
        <form className='flex items-center gap-2 shadow-sm p-2' >
          <input
          className=' flex-1 outline-none  rounded px-3 py-2 text-gray-700 placeholder-gray-400 '
          type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder='What needs to be done?' required />

          <button className='bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded text-white cursor-pointer' >Add Task</button>

        </form>
        </div>
      </div>
  )
}

export default App
