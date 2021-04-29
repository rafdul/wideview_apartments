import React from 'react';
import { shallow } from 'enzyme';
import { ProductsByCategoryComponent } from './ProductsByCategory';

describe('Component ProductsByCategory', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsByCategoryComponent />);
    expect(component).toBeTruthy();
  });
});
