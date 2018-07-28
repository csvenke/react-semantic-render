<div align="center">

  <img src='./media/logo.png' width="20%" alt='logo' />

  <h1>react-semantics</h1>

  <h4>Blazing fast semantic helper components for working with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

  <p>
    <a href="https://badge.fury.io/js/react-semantics">
      <img src="https://badge.fury.io/js/react-semantics.svg" alt="npm package" />
    </a>
    <a href="https://travis-ci.com/csvenke/react-semantics">
      <img src="https://travis-ci.com/csvenke/react-semantics.svg?branch=master" alt="build status" />
    </a>
    <a href='https://coveralls.io/github/csvenke/react-semantics?branch=master'>
      <img src='https://coveralls.io/repos/github/csvenke/react-semantics/badge.svg?branch=master' alt='Coverage Status' />
    </a>
    <a href="https://david-dm.org/csvenke/react-semantics">
      <img src="https://david-dm.org/csvenke/react-semantics.svg" alt="dependencies status" />
    </a>
    <a href="https://david-dm.org/csvenke/react-semantics?type=dev">
      <img src="https://david-dm.org/csvenke/react-semantics/dev-status.svg" alt="devdependencies status" />
    </a>
    <a href="https://greenkeeper.io/">
      <img src="https://badges.greenkeeper.io/csvenke/react-semantics.svg" alt="greenkeeper" />
    </a>
  </p>

  <p>
    <a href="#install">Install</a> •
    <a href="#example-usage">Example usage</a> •
    <a href="#why">Why?</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#development-setup">Development setup</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#contributors">Contributors</a> •
    <a href="#license">License</a>
  </p>
</div>

## Install

```bash
$ npm install react-semantics
```

## Example usage

```jsx
import { Show, List } from 'react-semantics';

const Menu = ({ showMenuItems }) => (
  <nav>
    <a href="/">Home</a>
    <Show when={showMenuItems}>
      <ul>
        <List
          items={['prices', 'contact', 'about']}
          render={m => (
            <li key={m}>
              <a href={`/${m}`}>{m}</a>
            </li>
          )}
        />
      </ul>
    </Show>
  </nav>
);
```

## Why?

In the example above you see two very common use cases where you have to show something when a condition is true and map content from an array of data.
This is normally solved with inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

Below you can see how it would look like with inline arrow functions.

```jsx
const Menu = ({ showMenuItems }) => (
  <nav>
    <a href="/">Home</a>
    {showMenuItems ? (
      <ul>
        {['prices', 'contact', 'about'].map(m => (
          <li key={m}>
            <a href={`/${m}`}>{m}</a>
          </li>
        ))}
      </ul>
    ) : null}
  </nav>
)
```


The purpose of this library is to develop and maintain semantic helper components that removes the need for inline arrow functions in react components.

Do you have an idea about a component you think belong here? [Tell us here!](https://github.com/csvenke/react-semantics/issues/new)

## Documentation

For full list of components and how they are used, go to our [documentation](https://csvenke.github.io/react-semantics/).

## Development setup

```bash
# Install dependencies
$ npm install

# Run linters
$ npm run lint

# Run tests
$ npm run test

# Build project
$ npm run build
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. 
* Add unit tests for any new or changed functionality.
* All library component props must be documented with jsdoc `/** */`, so that typescript definition files can be generated.
* All library components must have `prop-types` that matches the component props interface.

### Commit style guide
We use [conventional commits style](https://conventionalcommits.org/).
Read up on it before doing your first commit.
Don't worry about making a mistake, `commitlint` will stop you if you do, and you can try again.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/41568251?v=4" width="100px;"/><br /><sub><b>Leiv Fredrik Berge</b></sub>](https://github.com/bergelf)<br />[💻](https://github.com/csvenke/react-semantics/commits?author=bergelf "Code") [⚠️](https://github.com/csvenke/react-semantics/commits?author=bergelf "Tests") [📖](https://github.com/csvenke/react-semantics/commits?author=bergelf "Documentation") [🤔](#ideas-bergelf "Ideas, Planning, & Feedback") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License - see [LICENSE](https://github.com/csvenke/react-semantics/blob/master/LICENSE) file for details.
