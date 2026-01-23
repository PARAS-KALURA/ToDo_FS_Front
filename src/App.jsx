import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="w-[400px] h-[300px] bg-gray-200 rounded-xl p-5">
        
        <h1 className="text-xl font-semibold mb-4">Todo App</h1>

        <div className="flex gap-2">
         <input
  type="text"
  placeholder="Enter todo..."
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  className="flex-1 px-3 py-2 rounded-md outline-none border border-white bg-transparent"
/>

          <button className="cursor-pointer px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
  Add
</button>

        </div>

      </main>
    </div>
  )
}

export default App
