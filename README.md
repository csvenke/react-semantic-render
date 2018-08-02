<div align="center">

  <img src='./media/logo.png' width="20%" alt='logo' />

  <h1>react-semantic-render</h1>

  <h4>Blazing fast semantic helper components for rendering content with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

  <p>
    <a href="https://www.npmjs.com/package/react-semantic-render">
      <img src="https://img.shields.io/npm/v/react-semantic-render.svg" alt="npm package" />
    </a>
    <a href="https://bundlephobia.com/result?p=react-semantic-render">
      <img src="https://img.shields.io/bundlephobia/min/react-semantic-render.svg" alt="bundle size" />
    </a>
    <a href="https://travis-ci.com/csvenke/react-semantic-render">
      <img src="https://travis-ci.com/csvenke/react-semantic-render.svg?branch=master" alt="build status" />
    </a>
    <a href='https://coveralls.io/github/csvenke/react-semantic-render?branch=master'>
      <img src='https://coveralls.io/repos/github/csvenke/react-semantic-render/badge.svg?branch=master' alt='coverage status' />
    </a>
    <a href="https://david-dm.org/csvenke/react-semantic-render">
      <img src="https://david-dm.org/csvenke/react-semantic-render.svg" alt="dependencies status" />
    </a>
  </p>

  <p>
    <a href="#key-features">Key features</a> •
    <a href="#install">Install</a> •
    <a href="#why">Why</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#development">Development</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#contributors">Contributors</a> •
    <a href="#license">License</a>
  </p>

</div>

## Key features
* __Growing list of semantic helper components__ 
  * __[List](https://csvenke.github.io/react-semantic-render/#/List)__ - Render content from an array of data.
  * __[Resolve](https://csvenke.github.io/react-semantic-render/#/Resolve)__ - Render content asynchronously.
  * __[Show](https://csvenke.github.io/react-semantic-render/#/Show)__ - Render content when a condition is true.
  * __[Switch](https://csvenke.github.io/react-semantic-render/#/Switch)__ - Render content from case that matches specified expression.
    * __[Switch.Case](https://csvenke.github.io/react-semantic-render/#/SwitchCase)__
    * __[Switch.Default](https://csvenke.github.io/react-semantic-render/#/SwitchDefault)__
* __Small bundle size__
* __Blazing fast__
* __TypeScript type definitions__
* __Above 90% test coverage__

## Install

Using npm:

```bash
$ npm install --save react-semantic-render
```

Using yarn:

```bash
$ yarn add react-semantic-render
```

### Example usage

```jsx
import { Show, List } from 'react-semantic-render';

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

## Why

In the example above you see two very common use cases where you have to render something when a condition is true and render content from an array of data.
This is usually solved with inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

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

Do you have an idea about a component you think belong here? [Tell us here!](https://github.com/csvenke/react-semantic-render/issues/new)

## Documentation

For full list of components and how they are used, go to our [documentation](https://csvenke.github.io/react-semantic-render/).

## Development

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

#### Commit style guide
We use [conventional commits style](https://conventionalcommits.org/).
Read up on it before doing your first commit.
Don't worry about making a mistake, `commitlint` will stop you if you do, and you can try again.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/9643219?v=4" width="100px;"/><br /><sub><b>Christian Svenkerud</b></sub>](https://github.com/csvenke)<br />[💻](https://github.com/csvenke/react-semantic-render/commits?author=csvenke "Code") [📖](https://github.com/csvenke/react-semantic-render/commits?author=csvenke "Documentation") [🤔](#ideas-csvenke "Ideas, Planning, & Feedback") [⚠️](https://github.com/csvenke/react-semantic-render/commits?author=csvenke "Tests") | [<img src="https://avatars2.githubusercontent.com/u/41568251?v=4" width="100px;"/><br /><sub><b>Leiv Fredrik Berge</b></sub>](https://github.com/bergelf)<br />[💻](https://github.com/csvenke/react-semantic-render/commits?author=bergelf "Code") [📖](https://github.com/csvenke/react-semantic-render/commits?author=bergelf "Documentation") [🤔](#ideas-bergelf "Ideas, Planning, & Feedback") [⚠️](https://github.com/csvenke/react-semantic-render/commits?author=bergelf "Tests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the MIT License - see [LICENSE](https://github.com/csvenke/react-semantic-render/blob/master/LICENSE) file for details.
