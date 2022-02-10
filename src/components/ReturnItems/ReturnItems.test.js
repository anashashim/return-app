import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReturnItems from './ReturnItems';

describe('ReturnItems', () => {
  let props;
  let shallowReturnItems;
  let renderedReturnItems;
  let mountedReturnItems;

  const shallowTestComponent = () => {
    if (!shallowReturnItems) {
      shallowReturnItems = shallow(<ReturnItems {...props} />);
    }
    return shallowReturnItems;
  };

  const renderTestComponent = () => {
    if (!renderedReturnItems) {
      renderedReturnItems = render(<ReturnItems {...props} />);
    }
    return renderedReturnItems;
  };

  const mountTestComponent = () => {
    if (!mountedReturnItems) {
      mountedReturnItems = mount(<ReturnItems {...props} />);
    }
    return mountedReturnItems;
  };  

  beforeEach(() => {
    props = {};
    shallowReturnItems = undefined;
    renderedReturnItems = undefined;
    mountedReturnItems = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
