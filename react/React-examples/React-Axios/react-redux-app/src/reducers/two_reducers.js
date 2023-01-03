import { MULTIPLY_BY_TWO } from '../actions'

const initialState = {
    twoValue: 2
}

function twoReducer(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case MULTIPLY_BY_TWO:
            return {
                twoValue: state.twoValue * 2
            }
        default: return state;
    }
}

export default twoReducer