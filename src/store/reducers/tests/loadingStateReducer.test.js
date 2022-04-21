import loadingStateReducer from '../loadingStateReducer';
import {
    REQUEST,
    SUCCESS,
    FAILURE
} from '../../actionTypes';

const mockState = {
    loading: false
};

const mockActionWithRequest = {
    loadingState: `${REQUEST}`,
}

const mockActionWithSuccess = {
    loadingState: `${SUCCESS}`,
}

const mockActionWithFailure = {
    loadingState: `${FAILURE}`,
}

const mockActionWithDifferentFetchLoadingState = {
    loadingState: null,
};

describe('loadingStateReducer', () => {
    test('should return "loading: true" if loadingState is REQUEST', () => {
        expect(loadingStateReducer(mockState, mockActionWithRequest)).toEqual({loading: true});
    });

    test('should return "loading: true" if loadingState is SUCCESS', () => {
        expect(loadingStateReducer(mockState, mockActionWithSuccess)).toEqual({loading: false});
    });

    test('should return "loading: true" if loadingState is FAILURE', () => {
        expect(loadingStateReducer(mockState, mockActionWithFailure)).toEqual({loading: false});
    });

    test('should return state with different loadingState', () => {
        expect(loadingStateReducer(mockState, mockActionWithDifferentFetchLoadingState)).toEqual(mockState);
    });
})