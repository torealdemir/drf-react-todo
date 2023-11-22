import React, { useState } from 'react'
import axios from 'axios'

const TodoForm = ({setTodos, fetchData}) => {

  const [newTodo, setNewTodo] = useState({
    'body': ''
  })
  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      'body': e.target.value
    }))
  }

  const postTodo = async () =>{
    function refreshPage() {
      window.location.reload(false);
    }

    try {
      await axios.post('http://127.0.0.1:8000/api/todo/', newTodo)
      setNewTodo({'body': ''})
      fetchData()
    } catch(error){
      console.log(error)
    }
  }



  return (
    <div>
      <input type="text" placeholder="Buraya yaz<3" className="input input-bordered w-full max-w-xs" 
        onChange={handleChange} value = {newTodo.body} 
        onKeyDown={(e) => {
          if (e == 'Enter'){
            postTodo();
          }
        }}
        />  
      <button className="btn btn-success ml-2" onClick={postTodo}>Kaydet!</button>
    </div>
  )
}

export default TodoForm