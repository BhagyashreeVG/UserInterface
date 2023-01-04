import { PENDING_TODO } from "../actions"

const initialState = {
    data: []
}

export const pendingReducer = (state= initialState, action) => {
    switch(action.type) {
        case PENDING_TODO : 
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