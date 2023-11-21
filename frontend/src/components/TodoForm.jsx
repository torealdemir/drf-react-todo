import React from 'react'

const TodoForm = () => {
  return (
    <div>
      <input type="text" placeholder="Buraya yaz<3" className="input input-bordered w-full max-w-xs" />  
      <button className="btn btn-success ml-2">Kaydet!</button>
    </div>
  )
}

export default TodoForm