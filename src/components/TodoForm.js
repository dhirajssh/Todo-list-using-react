import React,{useState} from 'react'

function TodoForm({addToDo}) {

  const [value,setValue] = useState('');

  const onFormSubmit=(e)=>{

    if(!value)return;

    addToDo({text:value, isCompleted:false});

    e.preventDefault();
  }

  const handleOnChange = (e)=>{
    setValue(e.target.value);
  }

  return(
    <form onSubmit={onFormSubmit}>
      <label className="form-label">
        Add task:
        <input
          type="text"
          className="form-input"
          placeholder="Enter new task"
          value={value}
          onChange={ handleOnChange }
        />
      </label>
    </form>
  )
}

export default TodoForm
