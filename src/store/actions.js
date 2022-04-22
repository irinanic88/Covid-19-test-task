import { summaryURL } from '../utils/variables';
import {
    REQUEST,
    SUCCESS,
    FAILURE,
    LOAD_SUMMARY,
    OPEN_MODAL,
    CLOSE_MODAL
} from './actionTypes';

export const loadSummary = () => async (dispatch) => {
    dispatch({
        type: `${LOAD_SUMMARY}__${REQUEST}`,
        loadingState: `${REQUEST}`
    });

    try {
        const data = await fetch(summaryURL).then(res => {
            if (res.status < 300) {
                return res.json();
            } else {
                throw new Error();
            }
        });

        dispatch({
            type: `${LOAD_SUMMARY}__${SUCCESS}`,
            loadingState: `${SUCCESS}`,
            data
        })
    } catch(error) {
        dispatch({
            type: `${LOAD_SUMMARY}__${FAILURE}`,
            loadingState: `${FAILURE}`,
            error
        })
    }
}

export const openModal = (slug, country) => ({
    type: `${OPEN_MODAL}`,
    data: {slug, country}
});

export const closeModal = () => ({
    type: `${CLOSE_MODAL}`
});