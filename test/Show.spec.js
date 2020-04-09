import React from "react";
import renderer from "react-test-renderer";

import { Show as Show1 } from "../dist/index.cjs";
import { Show as Show2 } from "../dist/index.esm";
import Show3 from "../dist/Show";
import Show4 from "../src/Show";

const data = {
  input: <div>render me</div>,
  output: { type: "div", props: {}, children: ["render me"] }
};

const tests = [
  {
    description:
      "should return result if when is true and children is JSX.element",
    props: {
      when: true,
      children: data.input,
      render: null
    },
    result: data.output
  },
  {
    description:
      "should return result if when is false and children is JSX.element",
    props: {
      when: false,
      children: data.input,
      render: null
    },
    result: null
  },
  {
    description:
      "should return result if when is true and render returns JSX.element",
    props: {
      when: true,
      children: null,
      render: () => data.input
    },
    result: data.output
  },
  {
    description:
      "should return result if when is false and render returns JSX.element",
    props: {
      when: false,
      children: null,
      render: () => data.input
    },
    result: null
  },
  {
    description: "should not evaluate render if when is false",
    props: {
      when: false,
      children: null,
      render: () => doesNotExist.a.b.c
    },
    result: null
  },
  {
    description:
      "should return content from children if when is true and both children and render is used",
    props: {
      when: true,
      children: data.input,
      render: () => <div>do not render me!</div>
    },
    result: data.output
  },
  {
    description:
      "should return null if when is true and both children and render is used",
    props: {
      when: false,
      children: data.input,
      render: () => <div>do not render me!</div>
    },
    result: null
  },
  {
    description:
      "should return null if when is true and both children and render is not used",
    props: {
      when: true,
      children: null,
      render: null
    },
    result: null
  },
  {
    description: "should return null if when is true and render returns null",
    props: {
      when: true,
      children: null,
      render: () => null
    },
    result: null
  },
  {
    description: "should return result if when is true and children is string",
    props: {
      when: true,
      children: "Hello World",
      render: null
    },
    result: "Hello World"
  },
  {
    description:
      "should return result if when is true and render returns string",
    props: {
      when: true,
      children: null,
      render: () => "Hello World"
    },
    result: "Hello World"
  }
];

const testCases = [
  {
    description: "dist/index.cjs",
    component: Show1,
    tests
  },
  {
    description: "dist/index.esm",
    component: Show2,
    tests
  },
  {
    description: "dist/Show",
    component: Show3,
    tests
  },
  {
    description: "src/Show",
    component: Show4,
    tests
  }
];

describe.each(testCases)("Show", ({ description, component, tests }) => {
  const Show = component;
  describe.each(tests)(`${description}`, ({ description, props, result }) => {
    it(`${description}`, () => {
      const element = <Show {...props} />;
      const component = renderer.create(element);
      expect(component.toJSON()).toEqual(result);
    });
  });
});
