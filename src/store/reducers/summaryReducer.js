import { SUCCESS, LOAD_SUMMARY } from '../actionTypes';

const summaryReducer = (state = [], action) => {
    switch (action.type) {
        case `${LOAD_SUMMARY}__${SUCCESS}`:

            const { Countries: summary } = action.data;
            return summary;
        default:
            return state;
    }
}

export default summaryReducer;