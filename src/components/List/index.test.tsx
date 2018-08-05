import { shallow } from 'enzyme';
import * as React from 'react';

import List from './';

describe('with render', () => {
  const input = [1, 2, 3];
  const output = '<div>1</div><div>2</div><div>3</div>';

  test('should return primary content from render', () => {
    const element = <List items={input} render={n => <div key={n}>{n}</div>} />;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(output);
  });
});

describe('with children', () => {
  const input = [1, 2, 3];
  const output = '<div>1</div><div>2</div><div>3</div>';

  test('should return primary content from children', () => {
    const element = <List items={input}>{n => <div key={n}>{n}</div>}</List>;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(output);
  });
});

describe('with children and render', () => {
  const input = [1, 2, 3];
  const outputChildren = '<div>1</div><div>2</div><div>3</div>';
  const outputRender = '<a>1</a><a>2</a><a>3</a>';

  test('should return primary content from children and ignore render', () => {
    const element = (
      <List items={input} render={n => <a key={n}>{n}</a>}>
        {n => <div key={n}>{n}</div>}
      </List>
    );
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(outputChildren);
    expect(wrapper.html()).not.toEqual(outputRender);
  });
});

describe('without children and render', () => {
  const input = [1, 2, 3];

  test('should return null', () => {
    const element = <List items={input} />;
    const wrapper = shallow(element);
    expect(wrapper.html()).toEqual(null);
  });
});
