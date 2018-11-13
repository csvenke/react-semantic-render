import * as React from 'react';
import renderer from 'react-test-renderer';

import List from '.';

describe('with render', () => {
  const input = [1, 2, 3];

  test('should return primary content from render', () => {
    const element = <List items={input} render={n => <div key={n}>{n}</div>} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('with children', () => {
  const input = [1, 2, 3];

  test('should return primary content from children', () => {
    const element = <List items={input}>{n => <div key={n}>{n}</div>}</List>;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('with children and render', () => {
  const input = [1, 2, 3];

  test('should return primary content from children and ignore render', () => {
    const element = (
      <List items={input} render={n => <a key={n}>{n}</a>}>
        {n => <div key={n}>{n}</div>}
      </List>
    );
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('without children and render', () => {
  const input = [1, 2, 3];

  test('should return null', () => {
    const element = <List items={input} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
