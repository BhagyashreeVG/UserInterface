import { MULTIPLY_BY_FIVE } from '../actions'

const initialState = {
    fiveValue: 5
}

function fiveReducer(state= initialState, action) {
    switch(action.type) {
        case MULTIPLY_BY_FIVE:
            return {
                fiveValue: state.fiveValue * 5
            }
        default: return state;
    }
}

export default fiveReducer