const path = require('path');
const glob = require('glob');
const app = require('./package.json');

module.exports = {
  title: app.name,
  version: app.version,
  exampleMode: 'expand',
  components: function() {
    return glob
      .sync(path.resolve(__dirname, 'src/components/**/*.tsx'))
      .filter(function(module) {
        return /\/[A-Z]\w*\.tsx$/.test(module);
      });
  },
  skipComponentsWithoutExample: true,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
};
