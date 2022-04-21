import { LOAD_SUMMARY } from '../actionTypes';

const summaryReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_SUMMARY:
            return action.data;
        default:
            return state;
    }
}

export default summaryReducer;