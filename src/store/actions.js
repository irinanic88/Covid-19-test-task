import { summaryURL } from '../utils/variables';
import { LOAD_SUMMARY } from './actionTypes';

export const loadSummary = () => async (dispatch) => {
    try {
        const data = await fetch(summaryURL).then(res => res.json());

        dispatch({
            type: LOAD_SUMMARY,
            data
        })
    } catch(error) {
        dispatch({
            type: LOAD_SUMMARY,
            error
        })
    }
}