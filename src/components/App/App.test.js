import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
const storeObjectDefault = {
    loadingState: {
        loading: false,
    },
    error: {
        error: null
    },
    modal: {
        display: false,
        params: {}
    },
    summary: []
};
const storeObjectWithLoading = {
    ...storeObjectDefault,
    loadingState: {
        loading: true
    }
};
const storeObjectWithModal = {
    ...storeObjectDefault,
    modal: {
        display: true,
        params: {
            slug: 'slug',
            country: 'country'
        }
    }
};

const storeDefault = mockStore(storeObjectDefault);
const storeWithLoading = mockStore(storeObjectWithLoading);
const storeWithModal = mockStore(storeObjectWithModal);

describe('App', () => {
    it('should render', () => {
        const wrapper = mount(
            <Provider store={storeDefault}>
                <App/>
            </Provider>
        );
        expect(wrapper.find('[data-id="app"]').length).toBe(1);
    });
    it('should not render loader if isLoading is false', () => {
        const wrapper = mount(
            <Provider store={storeDefault}>
                <App/>
            </Provider>
        );
        expect(wrapper.find('[data-id="loader"]').length).toBe(0);
    });
    it('should render loader if isLoading is true', () => {
        const wrapper = mount(
            <Provider store={storeWithLoading}>
                <App/>
            </Provider>
        );
        expect(wrapper.find('[data-id="loader"]').length).toBe(1);
    });
    it('should not render modal if modal.display is false', () => {
        const wrapper = mount(
            <Provider store={storeDefault}>
                <App/>
            </Provider>
        );
        expect(wrapper.find('[data-id="modal"]').length).toBe(0);
    });
    it('should render modal if modal-display is true', () => {
        const wrapper = mount(
            <Provider store={storeWithModal}>
                <App/>
            </Provider>
        );
        expect(wrapper.find('[data-id="modal"]').length).toBe(1);
    });
});