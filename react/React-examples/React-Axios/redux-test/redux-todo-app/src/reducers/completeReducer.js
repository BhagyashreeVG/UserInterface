import { COMPLETE_TODO } from "../actions"

const initialState = {
    data: []
}

export const completeReducer = (state= initialState, action) => {
    switch(action.type) {
        case COMPLETE_TODO : 
         return {
            ...state,
            data: [
                ...state.data,
                {
                    id: action.id,
                    name: action.name,
                    desc: action.desc,
                    status: action.status
                }
            ]
         }
        default: return state
    }
}