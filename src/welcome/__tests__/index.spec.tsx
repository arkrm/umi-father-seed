import React from 'react';
import { shallow, render } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Welcome, { prefixCls } from '../index';

describe('Welcome Component', () => {
  it('test render', () => {
    const wrapper = render(<Welcome ds={['Hello']} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('test props - btnText', () => {
    const btnText = '进入主页';
    const wrapper = shallow(<Welcome ds={['Hello']} btnText={btnText} />);
    expect(wrapper.find(`.${prefixCls}-link`).text()).toBe(btnText);
  });

  it('test props - onBtnClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Welcome ds={['Hello']} onBtnClick={onClick} />);
    wrapper.find(`.${prefixCls}-link`).simulate('click');
    expect(onClick).toBeCalled();
  });
});
