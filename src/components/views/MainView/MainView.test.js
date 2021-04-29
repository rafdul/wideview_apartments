import React from 'react';
import { shallow } from 'enzyme';
import { MainViewComponent } from './MainView';

describe('Component MainView', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainViewComponent />);
    expect(component).toBeTruthy();
  });
});
