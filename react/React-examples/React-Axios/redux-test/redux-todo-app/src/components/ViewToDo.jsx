import React from 'react'
import { connect } from 'react-redux'
import { deleteToDoActionCreator, completeToDoActionCreator, pendingToDoActionCreator } from '../actions'
import './ViewToDo.css';

function ViewToDo(props) {
  const handleChange = (event, task) => {
    if (event.target.value === 'Completed') 
        props.dispatch(completeToDoActionCreator(task.id, task.name, task.desc, task.status))
    else if (event.target.value === 'Pending')
        props.dispatch(pendingToDoActionCreator(task.id, task.name, task.desc, task.status))
    }
  return (
    <div className="view-task-container">
      <h3>All to dos</h3>
      <table>
        {
          props.tasks.map((task, index)=>{
            return (
              <tr key={index}>
                <td>{task.name}</td>
                <td>
                  <button className="btn-delete" onClick={()=>props.dispatch(
                    deleteToDoActionCreator(task.id, task.name, task.desc, task.status))}>Delete</button></td>
                <td className="status-item">
                  <input type="checkbox" value={task.status} onChange={ (event) => {
                    handleChange(event,task)}}/> {task.status}
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

const mapStateToProps= (state) => {
  return { 
    tasks: state.todoReducer.data
  }
}
export default connect(mapStateToProps)(ViewToDo)