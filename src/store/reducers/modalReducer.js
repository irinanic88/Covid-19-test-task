import { OPEN_MODAL, CLOSE_MODAL } from '../actionTypes';

const initialState = {
    display: false,
    params: {}
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${OPEN_MODAL}`:
            return {
                ...state,
                display: true,
                params: action.data
            };
        case `${CLOSE_MODAL}`:
            return {
                ...state,
                display: false,
                params: {}
            }
        default:
            return state;
    }
}

export default modalReducer;