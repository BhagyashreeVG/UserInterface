import React from 'react'
import './Employees.css';
import Employee from './Employee';

function Employees(props) {
    const emps = props.data;
  return (
    <div className="employee-data">
        <h2>Employee Data</h2>
        <hr/>
        <table>
            <tr><th>ID</th><th>Name</th><th>Dept</th></tr>
            { emps.map(emp=><Employee src={emp} />) }
        </table>
    </div>
  )
}

export default Employees