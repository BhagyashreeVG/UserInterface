import React from 'react'
import './AddToDo.css'
import { connect } from 'react-redux'
import { addToDoActionCreator } from '../actions'
 
function AddToDo(props) {
  return (
    <div className="add-task-container">
        <h3>Add To Do</h3>
        <form className="form-div" onSubmit={(event) => {
          event.preventDefault();
          props.dispatch(addToDoActionCreator(
            event.target.taskName.value,
            event.target.taskDesc.value,
            event.target.taskStatus.value ))
          event.target.reset();
          }}>
            <input type="text" placeholder="Name" name="taskName"/>
            <input type="text" placeholder="Description" name="taskDesc"/>
            <select name="taskStatus">
                <option>Completed</option>
                <option>Pending</option>
            </select>
            <button >Add</button>
        </form>
    </div>
  )
}

export default connect()(AddToDo)
