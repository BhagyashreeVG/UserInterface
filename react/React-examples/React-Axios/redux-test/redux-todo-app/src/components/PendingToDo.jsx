import React from 'react'
import { connect } from 'react-redux';
import './PendingToDo.css';

function PendingToDo(props) {
  return (
    <div className="pending-task-container">
        <h3>Pending tasks</h3>
        <table>
        {
            props.pendingTask.map((task, index)=> {
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

const mapStateToProp = (state) => {
    return {
        pendingTask: state.pendingReducer.data
    }
}
export default connect(mapStateToProp)(PendingToDo)
