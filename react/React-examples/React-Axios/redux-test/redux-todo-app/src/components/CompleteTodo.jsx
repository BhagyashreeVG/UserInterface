import React from 'react'
import { connect } from 'react-redux'
import './CompleteToDo.css';

function CompleteTodo(props) {
    console.log("Inside completetodo comp"+JSON.stringify(props))
  return (
    <div className="completed-task-container">
        <h3>Completed task</h3>
        <table>
        {
            props.completedTask.map((task,index)=> {
                return(
                <tr key={index}>
                    <td>{task.name}</td>
                    <td>{task.desc}</td>
                    <td>{task.status}</td>
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
        completedTask: state.completeReducer.data
    }
}

export default connect(mapStateToProps)(CompleteTodo)
