import { ADD_TODO, COMPLETE_TODO } from "../actions";
import { DELETE_TODO, PENDING_TODO } from "../actions";

const initialState = {
    data: [
        {
            name: 'Task-1',
            desc: 'Desc-1' ,
            id: 1,
            status: 'Completed'
        }
    ]
}
export const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: 
            return {
                ...state,
                data : [
                    ...state.data,
                    {
                        name: action.name,
                        desc: action.desc,
                        status: action.status,
                        id: action.id
                    }
                ]
            }
         
        case DELETE_TODO: 
            const deletedtodos = state.data.filter(task => task.id !== action.id)
            return {
                ...state,
                data:deletedtodos
            }

        case COMPLETE_TODO: 
            const completedtodos = state.data.filter(task => task.id !== action.id)
            return {
                ...state,
                data:completedtodos
            }

        case PENDING_TODO: 
            const pendingtodos = state.data.filter(task => task.id !== action.id)
            return {
                ...state,
                data:pendingtodos
            }

        default: return state;
    }
}