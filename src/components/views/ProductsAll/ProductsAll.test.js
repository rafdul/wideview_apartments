import React from 'react';
import { shallow } from 'enzyme';
import { ProductsAllComponent } from './ProductsAll';

describe('Component ProductsAll', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsAllComponent />);
    expect(component).toBeTruthy();
  });
});
