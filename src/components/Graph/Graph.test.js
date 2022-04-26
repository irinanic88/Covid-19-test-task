import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Graph from './Graph';

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
    slugTrend: {
        algeria: {
            cases: {
                confirmed: [
                    {
                        date: 1648771200000,
                        confirmed: 250
                    },
                    {
                        date: 1650931200000,
                        confirmed: 350
                    },
                ]
            }
        }
    }
});

describe('Graph', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Graph slug={"algeria"} country={"Algeria"} caseType={"confirmed"}/>
            </Provider>
        );
        expect(wrapper.find('[data-id="graph"]').length).toBe(1);
    });
});
