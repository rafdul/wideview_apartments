import React from 'react';
import { shallow } from 'enzyme';
import { ProductOneComponent } from './ProductOne';

describe('Component ProductOne', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductOneComponent />);
    expect(component).toBeTruthy();
  });
});
