import * as React from 'react';
import renderer from 'react-test-renderer';

import Show from '.';

const input = <div>render me</div>;

describe('with children', () => {
  test('should return primary content from children if when equals true', () => {
    const element = <Show when={true}>{input}</Show>;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should return null if when equals false', () => {
    const element = <Show when={false}>{input}</Show>;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('with render', () => {
  test('should return primary content from render if when equals true', () => {
    const element = <Show when={true} render={() => input} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should return null if when equals false', () => {
    const element = <Show when={false} render={() => input} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should not evaluate render if when is undefined', () => {
    const obj = undefined;
    const element = <Show when={!!obj} render={() => <div>{obj.label}</div>} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('with children and render', () => {
  const renderInput = <div>render</div>;
  const childrenInput = <div>children</div>;

  test('should return primary content from children and ignore render if when equals true', () => {
    const element = (
      <Show when={true} render={() => renderInput}>
        {childrenInput}
      </Show>
    );
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should return null if when equals false', () => {
    const element = (
      <Show when={false} render={() => renderInput}>
        {childrenInput}
      </Show>
    );
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('without children and render', () => {
  test('should return null', () => {
    const element = <Show when={true} />;
    const component = renderer.create(element);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
