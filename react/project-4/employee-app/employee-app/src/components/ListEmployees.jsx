import React from 'react'
import { empArr } from '../service/data';

function ListEmployees(props) {
    
  return (
    <div>
        <h1>
           {empArr.map(emp =>{ 
               if (props.col == "id") {
                   return <h1>{emp.id}</h1>; 
               } else {
                   return <h1>{emp.name}</h1>;
               }
            })}
        </h1>
    </div>
  )
}

export default ListEmployees