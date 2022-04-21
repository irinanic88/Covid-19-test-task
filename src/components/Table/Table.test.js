import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Table from './Table';

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const store = mockStore({
    summary: [{
        ID: 123,
        Country: 'Spain',
        TotalConfirmed: 30,
        TotalRecovered: 20,
        TotalDeaths: 5
    }]
});

describe('Table', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Table/>
            </Provider>
        );
        expect(wrapper.find('table').length).toBe(1);
    });
    it('should render given amount of data inside the table', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Table/>
            </Provider>
        );
        expect(wrapper.find('tr').length).toBe(2);
    })
});