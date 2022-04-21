import errorReducer from '../errorReducer';
import { FAILURE, SUCCESS } from '../../actionTypes';

const mockState = {
    error: null
}

const mockActionWithFailure = {
    loadingState: `${FAILURE}`,
    error: {}
}

const mockActionWithDifferentLoadingState = {
    loadingState: `${SUCCESS}`
}

const mockActionWithoutLoadingState = {}

describe('errorReducer', () => {
    test('should return state with received data if loadingState is FAILURE', () => {
        expect(errorReducer(mockState, mockActionWithFailure)).toEqual({error: {}});
    });

    test('should return state if loadingState is not FAILURE', () => {
        expect(errorReducer(mockState, mockActionWithDifferentLoadingState)).toEqual(mockState);
    });

    test('should return state if there is no loadingState', () => {
        expect(errorReducer(mockState, mockActionWithoutLoadingState)).toEqual(mockState);
    });
});