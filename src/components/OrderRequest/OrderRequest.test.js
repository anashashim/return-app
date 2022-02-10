import React from 'react';
import { shallow, render, mount } from 'enzyme';
import OrderRequest from './OrderRequest';

describe('OrderRequest', () => {
  let props;
  let shallowOrderRequest;
  let renderedOrderRequest;
  let mountedOrderRequest;

  const shallowTestComponent = () => {
    if (!shallowOrderRequest) {
      shallowOrderRequest = shallow(<OrderRequest {...props} />);
    }
    return shallowOrderRequest;
  };

  const renderTestComponent = () => {
    if (!renderedOrderRequest) {
      renderedOrderRequest = render(<OrderRequest {...props} />);
    }
    return renderedOrderRequest;
  };

  const mountTestComponent = () => {
    if (!mountedOrderRequest) {
      mountedOrderRequest = mount(<OrderRequest {...props} />);
    }
    return mountedOrderRequest;
  };  

  beforeEach(() => {
    props = {};
    shallowOrderRequest = undefined;
    renderedOrderRequest = undefined;
    mountedOrderRequest = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
