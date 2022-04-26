import {
    capitalize,
    filterDataArray,
    formattedData
} from '../functions';

const mockString = 'string';
const mockCapitalizeResult = 'String';

describe('capitalize', () => {
    test('should return capitalized string', () => {
        expect(capitalize(mockCapitalizeString)).toEqual(mockCapitalizeResult);
    })
});


const mockArr = [
    {
        Country: 'Algeria',
        Slug: 'algeria',
        Date: '2022-04-26T00:00:00.000Z',
        Confirmed: 250
    }
];

const expectedFilterDataArrayResult = [
    {
        date: 1650931200000,
        confirmed: 250
    }
]

describe('filterDataArray', () => {
    test('should return expected array format', () => {
        expect(filterDataArray(mockArr)).toEqual(expectedFilterDataArrayResult);
    })
});


const mockData = [
    {
        date: 1650931200000,
        confirmed: 250
    }
];

const expectedFormattedDataResult = [
    {
        date: 'Apr 26th, 2022',
        tick: 3,
        confirmed: 250
    }
]

describe('formattedData', () => {
    test('it should return expected array format', () => {
        expect(formattedData(mockData)).toEqual(expectedFormattedDataResult);
    })
});