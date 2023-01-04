import { combineReducers } from "redux";
import { todoReducer  } from "./todoReducer";
import { deleteReducer } from "./deleteReducer";
import { completeReducer } from "./completeReducer"
import { pendingReducer } from "./pendingReducer"

export const rootReducer = combineReducers({
    todoReducer,
    deleteReducer,
    completeReducer,
    pendingReducer
})