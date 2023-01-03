import { combineReducers } from 'redux'

import two_reducer from './two_reducers';
import five_reducer from './five_reducer';

const rootReducer = combineReducers({
    two_reducer,
    five_reducer
})

export default rootReducer;