import { mount } from 'enzyme';
import * as React from 'react';

import ShowAsync from './';

const resolve = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve('resolve');
    }, 10);
  });
const reject = () =>
  new Promise((_, reject) => {
    setTimeout(() => {
      reject('reject');
    }, 10);
  });
const waitForResult = () =>
  new Promise(resolve => {
    setTimeout(resolve, 11);
  });
const getPromise = wrapper => wrapper.prop('when');
const pendingResult = '<div>pending</div>';
const resolveResult = '<div>resolve</div>';
const rejectResult = '<div>reject</div>';

describe('render tests', () => {
  test('resolve with nothing', async () => {
    const element = <ShowAsync when={resolve()} />;
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(null);
    await waitForResult();
    await expect(wrapper.html()).toEqual(null);
  });

  test('reject with nothing', async () => {
    const element = <ShowAsync when={reject()} />;
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(null);
    await waitForResult();
    await expect(wrapper.html()).toEqual(null);
  });

  test('pending then resolve', async () => {
    const element = (
      <ShowAsync when={resolve()} pending={() => <div>pending</div>}>
        {value => <div>{value}</div>}
      </ShowAsync>
    );
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(pendingResult);
    await waitForResult();
    await expect(wrapper.html()).toEqual(resolveResult);
  });

  test('no pending then resolve', async () => {
    const element = (
      <ShowAsync when={resolve()}>{value => <div>{value}</div>}</ShowAsync>
    );
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(null);
    await waitForResult();
    await expect(wrapper.html()).toEqual(resolveResult);
  });

  test('pending then reject', async () => {
    const element = (
      <ShowAsync
        when={reject()}
        pending={() => <div>pending</div>}
        rejected={() => <div>reject</div>}
      />
    );
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(pendingResult);
    await waitForResult();
    await expect(wrapper.html()).toEqual(rejectResult);
  });

  test('no pending then reject', async () => {
    const element = <ShowAsync when={reject()} rejected={() => <div>reject</div>} />;
    const wrapper = mount(element);

    await expect(wrapper.html()).toEqual(null);
    await waitForResult();
    await expect(wrapper.html()).toEqual(rejectResult);
  });
});

describe('promise tests', () => {
  test('reject without rejected', async () => {
    const element = <ShowAsync when={reject()} />;
    const wrapper = mount(element);

    await expect(getPromise(wrapper)).rejects.toEqual('reject');
  });

  test('reject with rejected', async () => {
    const element = <ShowAsync when={reject()} rejected={error => <div>{error}</div>} />;
    const wrapper = mount(element);

    await expect(getPromise(wrapper)).rejects.toEqual('reject');
  });

  test('resolve without children/render', async () => {
    const element = <ShowAsync when={resolve()} />;
    const wrapper = mount(element);

    await expect(getPromise(wrapper)).resolves.toEqual('resolve');
  });

  test('resolve with children', async () => {
    const element = (
      <ShowAsync when={resolve()}>{value => <div>{value}</div>}</ShowAsync>
    );
    const wrapper = mount(element);

    await expect(getPromise(wrapper)).resolves.toEqual('resolve');
  });

  test('resolve with render', async () => {
    const element = <ShowAsync when={resolve()} render={value => <div>{value}</div>} />;
    const wrapper = mount(element);

    await expect(getPromise(wrapper)).resolves.toEqual('resolve');
  });
});
