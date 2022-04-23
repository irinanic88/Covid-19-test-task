import modalReducer from '../modalReducer';
import {
    OPEN_MODAL,
    CLOSE_MODAL
} from '../../actionTypes';

const mockState = {
    display: false,
    params: {}
};

const expectedOpenModalState = {
    display: true,
    params: {}
};

const mockActionOpenModal = {
    type: `${OPEN_MODAL}`,
    data: {}
};

const mockActionCloseModal = {
    type: `${CLOSE_MODAL}`
};

const mockDifferentAction = {
    type: 'DIFFERENT'
};


describe('modalReducer', () => {
    test('should return expected state if action is OPEN_MODAL', () => {
        expect(modalReducer(mockState, mockActionOpenModal)).toEqual(expectedOpenModalState);
    });

    test('should return initial state if action is CLOSE_MODAL', () => {
        expect(modalReducer(mockState, mockActionCloseModal)).toEqual(mockState);
    });

    test('should return state if action is different from expected', () => {
        expect(modalReducer(mockState, mockDifferentAction)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(modalReducer(mockState, {})).toEqual(mockState);
    });
})