import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReturnSuccess from './ReturnSuccess';

describe('ReturnSuccess', () => {
  let props;
  let shallowReturnSuccess;
  let renderedReturnSuccess;
  let mountedReturnSuccess;

  const shallowTestComponent = () => {
    if (!shallowReturnSuccess) {
      shallowReturnSuccess = shallow(<ReturnSuccess {...props} />);
    }
    return shallowReturnSuccess;
  };

  const renderTestComponent = () => {
    if (!renderedReturnSuccess) {
      renderedReturnSuccess = render(<ReturnSuccess {...props} />);
    }
    return renderedReturnSuccess;
  };

  const mountTestComponent = () => {
    if (!mountedReturnSuccess) {
      mountedReturnSuccess = mount(<ReturnSuccess {...props} />);
    }
    return mountedReturnSuccess;
  };  

  beforeEach(() => {
    props = {};
    shallowReturnSuccess = undefined;
    renderedReturnSuccess = undefined;
    mountedReturnSuccess = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
