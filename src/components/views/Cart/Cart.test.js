import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

describe('Component Cart', () => {
  it('should render without crashing', () => {

    const component = shallow(<CartComponent className="lorem" loadingOrders={{active: true}}/>);
    expect(component).toBeTruthy();
  });
});
