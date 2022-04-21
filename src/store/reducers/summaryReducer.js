import { LOAD_SUMMARY } from '../actionTypes';

const summaryReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_SUMMARY:
            console.log(action.error);

            const { Countries: summary } = action.data;
            return summary;
        default:
            return state;
    }
}

export default summaryReducer;