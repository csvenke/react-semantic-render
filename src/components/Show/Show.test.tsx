import { shallow } from 'enzyme';
import * as React from 'react';

import Show from '.';

const input = <div>render me</div>;
const output = '<div>render me</div>';

describe('with children', () => {
  test('should return primary content from children if when equals true', () => {
    const element = <Show when>{input}</Show>;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(output);
  });

  test('should return null if when equals false', () => {
    const element = <Show when={false}>{input}</Show>;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(null);
  });
});

describe('with render', () => {
  test('should return primary content from render if when equals true', () => {
    const element = <Show when render={() => input} />;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(output);
  });

  test('should return null if when equals false', () => {
    const element = <Show when={false} render={() => input} />;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(null);
  });
});

describe('with children and render', () => {
  const renderInput = <div>render</div>;
  const childrenInput = <div>children</div>;
  const childrenOutput = '<div>children</div>';

  test('should return primary content from children and ignore render if when equals true', () => {
    const element = (
      <Show when render={() => renderInput}>
        {childrenInput}
      </Show>
    );
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(childrenOutput);
  });

  test('should return null if when equals false', () => {
    const element = (
      <Show when={false} render={() => renderInput}>
        {childrenInput}
      </Show>
    );
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(null);
  });
});

describe('without children and render', () => {
  test('should return null', () => {
    const element = <Show when />;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(null);
  });
});
