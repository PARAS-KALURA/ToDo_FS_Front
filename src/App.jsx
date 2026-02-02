import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {

  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editedText, setEditedText] = useState("");
  
  const getTodos = async () => {
    try {
     const res = await axios.get("http://localhost:5000/todos");
      setTodos(res.data);
      console.log(res.data);
      
    } catch(err) {
      console.error(err.message);
    }
  }


  // useEffect is used to run getTodos() automatically when the page loads
  useEffect(() => {
   getTodos();
  }, [] )


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
   const response = await axios.post("http://localhost:5000/todos", {
    description,completed:false,
   } )
   setTodos([...todos, response.data]);
   setDescription("");

    console.log(response);
   
    }  catch(err) {
        console.error(err.message);

    }

   

  }

  return (

<div className='min-h-screen flex items-center justify-center bg-gray-800 text-white'>
   <div className='' >
     <h1 className='text-2xl font-bold text-center '>PERN TODO APP</h1>
      
      <form 
      onSubmit={onSubmitForm}
      className="bg-white p-6 rounded shadow-lg flex gap-2">

      <input
  type="text"
  placeholder="What needs to be done?"
  value={description}
  onChange={(e) => setDescription(e.target.value)} required
  className="px-4 py-2 rounded text-black w-64 outline-none"
/>

<button
  type="submit"
  className="bg-blue-500 px-4 py-2 rounded font-semibold hover:bg-blue-600 cursor-pointer "
>
  Add
</button>

      </form>

     git <div>
        {todos.length === 0 ? (<p className='text-gray-600' >No Task Available</p>) : (
          <div>
            {todos.map((todo) => {
              <div>
                <span>{todos.description}</span>
              </div>
            } )}
          </div>
        ) }
      </div>

   </div>
</div>
)
}

export default App  