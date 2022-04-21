import summaryReducer from '../summaryReducer';
import {
    LOAD_SUMMARY,
    SUCCESS,
    FAILURE
} from '../../actionTypes';

const mockState = {};

const mockActionWithLoadSummaryType = {
    type: `${LOAD_SUMMARY}__${SUCCESS}`,
    data: {Countries: []}
}
const mockActionWithDifferentType = {
    type: `${LOAD_SUMMARY}__${FAILURE}`,
}

const mockActionWithoutType = {};

describe('summaryReducer', () => {
    test('should return state with received data if action type is LOAD_SUMMARY__SUCCESS', () => {
        expect(summaryReducer(mockState, mockActionWithLoadSummaryType)).toEqual([]);
    });

    test('should return state if action type is not LOAD_SUMMARY__SUCCESS', () => {
        expect(summaryReducer(mockState, mockActionWithDifferentType)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(summaryReducer(mockState, mockActionWithoutType)).toEqual(mockState);
    });
});