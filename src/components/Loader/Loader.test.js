import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Loader from './Loader';

Enzyme.configure({adapter: new Adapter()});

describe('Loader', () => {
    it('should render', () => {
        const wrapper = shallow(<Loader />);
        expect(wrapper.find('[data-id="loader"]').length).toBe(1);
    })
})