import React, { useState } from 'react'
import { FaBeer } from "react-icons/fa";
import './TodoList.css'
const TodoList = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([
    {
        id: 1,
        task: "This is Testing",
      },
  ]);
  // s

  // {
  //   id: 1,
  //   task: "Go Swimming",
  // },
  // {
  //   id: 2,
  //   task: "get a friend",
  // },

  // ]);


  const submitHandler = (e) => {
    e.preventDefault();
    clean();
  }
  const taskHandler = (e) => {
    setTask(e.target.value)

  }
  const addHandler = () => {
    if (task != "") {
      const newTask =
      {
        id: Date.now(),
        task: task,
      }
      setTodoList([...todoList, newTask]);
    } else {
      alert('Please fill the form first');
    }

    // console.log(todoList);
  }
  const editHandler = (clickId) => {
    //The [0] at the end is used to extract the first (and only) element from the array.
    const oldItem = todoList.filter((item) => item.id === clickId)[0];

    if (oldItem) {
      const newText = window.prompt("Edit your text ", oldItem.task);

      if (newText !== null) {
        const updatedTodoItems = todoList.map((item) =>
          item.id === clickId ? { ...item, task: newText } : item
          
          );
        setTodoList(updatedTodoItems);
      }
    }
  };
  const deleteHandler = (id) => {
    console.log(id);
    setTodoList(todoList.filter((list) => list.id !== id))
  }
  const deleteAllHandler = () => {
    setTodoList([]);
  }
  const clean = () => {
    setTask("");
  }
  return (
    <>
      <div className="container">
        <div className="l-wrap">
          <h2>TODO LIST</h2>

          <form action="" onSubmit={submitHandler}>
            <div className="form-group">
              <input type="text" className='form-control' value={task} onChange={taskHandler} placeholder='Add Item . . ' />
              <div className="form-group-btn">
                <button className='btn btn-dark' onClick={addHandler} type='submit' >Add <FaBeer /> </button>
                <h5>Total : {todoList.length}</h5>
                {todoList.length > 0 &&
                  <div className='btn-end'>
                    <button onClick={() => deleteAllHandler()} className='btn btn-red'>Delete All</button>
                  </div>
                }
              </div>
            </div>
          </form>
                
          {todoList.map((todo, index) =>

            <div className="displayItem" key={index}>
              <div className="displayOne">
                <h4>{index + 1} . {todo.task}</h4>

              </div>
              <div className="displayTwo">
                <button className='btn btn-edit' onClick={() => editHandler(todo.id)}>Edit</button>
                <button className='btn btn-red' onClick={() => deleteHandler(todo.id)}>Done</button>

                {/* <button className='btn btn-edit'>Edit</button> */}
              </div>
            </div>
          )}

        </div>

      </div>
    </>
  )
}

export default TodoList