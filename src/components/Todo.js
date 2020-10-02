import React,{useState} from 'react'
import Item from './Item';
import TodoForm from './TodoForm';

function Todo() {

  const initialState=[
    {
      text:'Learn Hooks',
      isCompleted: false,
    },
    {
      text:'Prepare for hackathon',
      isCompleted: false,
    },
    {
      text:'Keep some time to talk to people otherwise you gonna go insane',
      isCompleted: false,
    }
  ]

  const [todos,setToDo] = useState(initialState);
  console.log(todos);

  const addToDo=(text)=>{
    const newTodos = [...todos,text];
    console.log(newTodos);
    setToDo(newTodos);
  };

  const handleItemClick = (index)=>{
    //Get all todos array from state (todos)
    const newTodos = [...todos];

    //Set iscompleted property to reverse of what its current value is
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setToDo(newTodos);

  }

  const handleRemoveClick = (index)=>{
    //Get all todos array from the state
    const newTodos = [...todos];

    //Remove the clicked item from the array
    newTodos.splice(index,1);

    //Set state with the newArray of in todos with the updated value
    setToDo(newTodos);
  }

  return (
    <div className="todo-container">
      <h2 className="main-heading">Todo App</h2>
      <TodoForm addToDo={addToDo} />
      <div>
        {todos.length? (
          todos.map((item,index)=>(
            <Item
              key={`${item.text}-${index}`}
              todo={item}
              index={index}
              handleRemoveClick={handleRemoveClick}
              handleItemClick={handleItemClick}
            />
          ))
        ):null}
      </div>
    </div>
  )
}

export default Todo
