import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import Form from '../app/form';
import enzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Form Component testing', function() {
  it('Form renders', () => {
    const wrapper = shallow(<Form />);
    const header = wrapper.find('header').find({
      className: 'App-header'
    });

    expect(header).to.have.length(1);
  });
});
