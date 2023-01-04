import React from 'react'
import { connect } from 'react-redux'
import './DeleteToDo.css';

function DeleteToDo(props) {
  console.log("In delelted todo", props)
  return (
    <div className="deleted-task-container">
      <h3>Deleted Tasks</h3>
      <table>
      {
        props.deletedTask.map((task, index)=> {
          return (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.desc}</td>
            </tr>
          )
        })
      }  
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    deletedTask: state.deleteReducer.data
  }
}

export default connect(mapStateToProps)(DeleteToDo)
