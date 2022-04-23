import { LOAD_SLUG_TREND, SUCCESS } from '../actionTypes';
import { filterDataArray } from '../../utils/functions';

const slugTrendReducer = (state = {}, action) => {
    switch (action.type) {
        case `${LOAD_SLUG_TREND}__${SUCCESS}`:
            return {
                ...state,
                [action.slug]: {
                    cases: {
                        [action.caseType]: filterDataArray(action.data)
                    }
                }
            };
        default:
            return state;
    }
}

export default slugTrendReducer;