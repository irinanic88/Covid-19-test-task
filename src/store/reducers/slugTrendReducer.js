import { LOAD_SLUG_TREND, SUCCESS } from '../actionTypes';

const slugTrendReducer = (state = {}, action) => {
    switch (action.type) {
        case `${LOAD_SLUG_TREND}__${SUCCESS}`:
            return {
                ...state,
                [action.slug]: {
                    cases: {
                        [action.caseType]: action.data
                    }
                }
            };
        default:
            return state;
    }
}

export default slugTrendReducer;