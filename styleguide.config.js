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

const getComponents = src => {
  return glob.sync(path.resolve(__dirname, src)).filter(function(module) {
    return /\/[A-Z]\w*\.tsx$/.test(module);
  });
};

module.exports = {
  title: app.name,
  version: app.version,
  exampleMode: 'expand',
  usageMode: 'expand',
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  pagePerSection: true,
  components: getComponents('src/components/**/*.tsx'),
  styleguideDir: 'docs',
  context: {
    faker: 'faker',
  },
  ...typescriptConfig,
};
