import slugTrendReducer from '../slugTrendReducer';
import {
    LOAD_SLUG_TREND,
    SUCCESS
} from '../../actionTypes';


const mockState = {};

const mockLoadSlugTrendSuccessAction = {
    type: `${LOAD_SLUG_TREND}__${SUCCESS}`,
    slug: 'algeria',
    caseType: 'confirmed',
    data: [
        {
            Date: '2022-04-26T00:00:00.000Z',
            Confirmed: 250
        }
    ]
};

const mockDifferentAction = {
    type: 'DIFFERENT'
};

const expectedLoadSlugTrendSuccessState = {
    algeria: {
        cases: {
            confirmed: [{
                date: 1650931200000,
                confirmed: 250
            }]
        }
    }
}


describe('slugTrendReducer', () => {
    test('should return expected state if action is LOAD_SLUG_TREND__SUCCESS', () => {
        expect(slugTrendReducer(mockState, mockLoadSlugTrendSuccessAction)).toEqual(expectedLoadSlugTrendSuccessState);
    });

    test('should return state if action is different from expected', () => {
        expect(slugTrendReducer(mockState, mockDifferentAction)).toEqual(mockState);
    });

    test('should return state if there is no action type', () => {
        expect(slugTrendReducer(mockState, {})).toEqual(mockState);
    });

})