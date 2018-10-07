const docgen = require('react-docgen');
const docgenTypescript = require('react-docgen-typescript');
const pkg = require('./package.json');

const typescriptConfig = {
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenTypescript.withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true, skipPropsWithName: true },
  }).parse,
};

module.exports = {
  title: pkg.name,
  version: pkg.version,
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
  sections: [
    {
      name: 'Components',
      components: [
        './src/components/List/List.tsx',
        './src/components/Show/Show.tsx',
        './src/components/ShowIfElse/ShowIfElse.tsx',
        './src/components/Switch/Switch.tsx',
      ],
      sectionDepth: 0,
    },
    {
      name: 'Hocs',
      components: ['./src/hocs/Hideable/Hideable.tsx'],
      sectionDepth: 0,
    },
  ],
  ...typescriptConfig,
};
