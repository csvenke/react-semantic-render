import { mount } from 'enzyme';
import * as React from 'react';
import Resolve from './Resolve';

describe('resolve', () => {
  const timeout = 10;

  const resolvable = resolved =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(resolved);
      }, timeout);
    });

  const rejectable = rejected =>
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(rejected);
      }, timeout);
    });

  test('no pending, resolve, reject', () => {
    const wrapper = mount(<Resolve promise={resolvable('resolved')} />);
    expect(wrapper.html()).toEqual(null);
  });

  test('pending', () => {
    const pending = <p>horse</p>;
    const result = '<p>horse</p>';
    const wrapper = mount(
      <Resolve promise={resolvable('resolved')} pending={pending} />,
    );
    expect(wrapper.html()).toEqual(result);
  });

  test('resolve', done => {
    const resolved = value => <p>{value}</p>;
    const result = '<p>resolved</p>';
    const wrapper = mount(
      <Resolve promise={resolvable('resolved')} resolved={resolved} />,
    );
    setTimeout(() => {
      expect(wrapper.html()).toEqual(result);
      done();
    }, timeout + 5);
  });

  test('resolve', done => {
    const rejected = value => <p>{value}</p>;
    const result = '<p>rejected</p>';
    const wrapper = mount(
      <Resolve promise={rejectable('rejected')} rejected={rejected} />,
    );
    setTimeout(() => {
      expect(wrapper.html()).toEqual(result);
      done();
    }, timeout + 5);
  });
});
