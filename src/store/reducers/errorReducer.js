import { FAILURE } from '../actionTypes';

const initialState = {
    error: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.loadingState) {
        case `${FAILURE}`:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default errorReducer;