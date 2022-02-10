import React from 'react';
import { shallow, render, mount } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
  let props;
  let shallowNotFound;
  let renderedNotFound;
  let mountedNotFound;

  const shallowTestComponent = () => {
    if (!shallowNotFound) {
      shallowNotFound = shallow(<NotFound {...props} />);
    }
    return shallowNotFound;
  };

  const renderTestComponent = () => {
    if (!renderedNotFound) {
      renderedNotFound = render(<NotFound {...props} />);
    }
    return renderedNotFound;
  };

  const mountTestComponent = () => {
    if (!mountedNotFound) {
      mountedNotFound = mount(<NotFound {...props} />);
    }
    return mountedNotFound;
  };  

  beforeEach(() => {
    props = {};
    shallowNotFound = undefined;
    renderedNotFound = undefined;
    mountedNotFound = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
