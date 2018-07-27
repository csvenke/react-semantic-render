const path = require('path');
const glob = require('glob');
const docgen = require('react-docgen');
const docgenTypescript = require('react-docgen-typescript');
const app = require('./package.json');

const typescriptConfig = {
  resolver: docgen.resolver.findAllComponentDefinitions,
  propsParser: docgenTypescript.withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
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
  skipComponentsWithoutExample: true,
  components: getComponents('src/components/**/*.tsx'),
  styleguideDir: 'docs',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Roboto", sans-serif',
    },
  },
  ...typescriptConfig,
};
