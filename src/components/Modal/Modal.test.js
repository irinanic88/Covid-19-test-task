import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Modal from './Modal';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureMockStore()
const store = mockStore({});
const mockModalChildren = <div data-id="modal-children"/>;

describe('Modal', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Modal children={<div data-id="modal-children"/>}/>
            </Provider>
        );
        expect(wrapper.find('[data-id="modal"]').length).toBe(1);
    });
    it('should render received children', () => {
        const wrapper = mount(
            <Provider store={store}>
                <Modal children={mockModalChildren}/>
            </Provider>
        );
        expect(wrapper.find('[data-id="modal-children"]').length).toBe(1);
    });
});
