import React from 'react';
import { render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Hello from '../index';

describe('Hello Component', () => {
  it('test render', () => {
    const wrapper = render(<Hello />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
