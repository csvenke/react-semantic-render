const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen');
const docgenTypescript = require('react-docgen-typescript');
const app = require('./package.json');

const typescriptConfig = {
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenTypescript.withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true, skipPropsWithName: true },
  }).parse,
};

const getComponents = () => {
  const components = ['List', 'Show', 'Switch'];
  return components.map(item => `./src/components/${item}/${item}.tsx`);
};

module.exports = {
  title: app.name,
  version: app.version,
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  styleguideDir: 'docs',
  previewDelay: 1000,
  context: {
    faker: 'faker',
    _: 'lodash',
  },
  components: getComponents(),
  ...typescriptConfig,
};
