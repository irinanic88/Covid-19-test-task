import { REQUEST, SUCCESS, FAILURE } from '../actionTypes';

const initialState = {
    loading: false
}

const loadingStateReducer = (state = initialState, action) => {
    switch (action.loadingState) {
        case `${REQUEST}`:
            return {
                ...state,
                loading: true
            }
        case `${SUCCESS}`:
            return {
                ...state,
                loading: false
            }
        case `${FAILURE}`:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default loadingStateReducer;