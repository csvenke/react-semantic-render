import { mount } from 'enzyme';
import * as React from 'react';

import ShowAsync from './';

const timeout = 100;

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

const getPromiseStatus = wrapper => wrapper.state('status');

describe('resolve', () => {
  test('no pending, resolve, reject', () => {
    const wrapper = mount(<ShowAsync when={resolvable('resolved')} />);
    expect(wrapper.html()).toEqual(null);
  });

  test('pending', () => {
    const pending = () => <p>horse</p>;
    const result = '<p>horse</p>';
    const wrapper = mount(<ShowAsync when={resolvable('resolved')} pending={pending} />);
    expect(wrapper.html()).toEqual(result);
  });

  test('resolve with render', done => {
    const resolved = value => <p>{value}</p>;
    const result = '<p>resolved</p>';
    const wrapper = mount(<ShowAsync when={resolvable('resolved')} render={resolved} />);
    setTimeout(() => {
      expect(wrapper.html()).toEqual(result);
      done();
    }, timeout + 50);
  });

  test('resolve with children', done => {
    const result = '<p>resolved</p>';
    const wrapper = mount(
      <ShowAsync when={resolvable('resolved')}>{value => <p>{value}</p>}</ShowAsync>,
    );
    setTimeout(() => {
      expect(wrapper.html()).toEqual(result);
      done();
    }, timeout + 50);
  });

  test('resolve', done => {
    const rejected = value => <p>{value}</p>;
    const result = '<p>rejected</p>';
    const wrapper = mount(
      <ShowAsync when={rejectable('rejected')} rejected={rejected} />,
    );
    setTimeout(() => {
      expect(wrapper.html()).toEqual(result);
      done();
    }, timeout + 50);
  });

  test('lifecycle', () => {
    const element = (
      <ShowAsync
        when={resolvable('result')}
        pending={() => <div>pending</div>}
        rejected={() => <div>rejected</div>}
      >
        {value => <div>{value}</div>}
      </ShowAsync>
    );
    const wrapper = mount(element);

    if (getPromiseStatus(wrapper) === 'pending') {
      expect(wrapper.html()).toEqual('<div>pending</div>');
    }

    if (getPromiseStatus(wrapper) === 'resolved') {
      expect(wrapper.html()).toEqual('<div>result</div>');
    }

    wrapper.setProps({ when: rejectable('rejected') });

    if (getPromiseStatus(wrapper) === 'pending') {
      expect(wrapper.html()).toEqual('<div>pending</div>');
    }

    if (getPromiseStatus(wrapper) === 'rejected') {
      expect(wrapper.html()).toEqual('<div>rejected</div>');
    }

    wrapper.unmount();

    expect(wrapper.html()).toEqual(null);

    wrapper.mount();

    wrapper.setProps({ when: rejectable('rejected'), rejected: undefined });
    if (getPromiseStatus(wrapper) === 'rejected') {
      expect(wrapper.html()).toEqual(null);
    }

    wrapper.setProps({
      when: resolvable('result'),
      render: undefined,
      children: undefined,
    });
    if (getPromiseStatus(wrapper) === 'resolved') {
      expect(wrapper.html()).toEqual(null);
    }

    wrapper.unmount();
    wrapper.mount();
    wrapper.setProps({ pending: undefined });
    if (getPromiseStatus(wrapper) === 'pending') {
      expect(wrapper.html()).toEqual(null);
    }
  });
});
