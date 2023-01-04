import { DELETE_TODO } from "../actions"

const initialState = {
    data: []
}

export const deleteReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_TODO: 
        console.log("action object in delete", action)
          return {
              ...state.data,
              data: [
                  ...state.data,
                  {
                    name: action.name,
                    desc: action.desc,
                    status: action.status,
                    id: action.id
                }
              ]
          }
        default: return state;
    }
}