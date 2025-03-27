// Create a to-do list component where users can add, remove, and mark items as complete.
import React, { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [mess, setmess] = useState('');

  const addTodo = () => {

    if (mess) {
      setTodo([...todo, { mess, completed: false }]);
      setmess('');
    }
  }
  const removeTask = (i) => {
    var newTodo = [...todo];
    newTodo.splice(i,1);
    setTodo(newTodo)
  }
  return (
    <div className='todo' style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input type="text" name="mess" value={mess} onChange={(e) => setmess(e.target.value)} id="" />
        <button onClick={addTodo} >Add</button>
      </div>
      <ul className='' style={{}}>
        {
          todo.map((e, i) => (
            <>
              <li key={i} style={{ display: "flex" }}>
                <p>{e.mess}  </p>
                <button onClick={()=>removeTask(i)}>X</button>
              </li>
            </>
          )
          )
        }
      </ul>
    </div>
  )
}

export default Todo