<div align="center">

  <img src='./media/logo.png' width="20%" alt='logo' />

  <h1>react-semantic-render</h1>

  <h4>Semantic helper components for rendering content with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

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
      <img src='https://coveralls.io/repos/github/csvenke/react-semantic-render/badge.svg?branch=master&service=github' alt='coverage status' />
    </a>
    <a href="https://greenkeeper.io/">
      <img src="https://badges.greenkeeper.io/csvenke/react-semantic-render.svg" alt="greenkeeper" />
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
  * __[List](https://csvenke.github.io/react-semantic-render/#/List)__: Renders content from an array of data.
  * __[Show](https://csvenke.github.io/react-semantic-render/#/Show)__: Renders content when specified condition is true.
  * __[Switch](https://csvenke.github.io/react-semantic-render/#/Switch)__: Renders content from first __[Switch.Case](https://csvenke.github.io/react-semantic-render/#/SwitchCase)__ that matches, else __[Switch.Default](https://csvenke.github.io/react-semantic-render/#/SwitchDefault)__ if it exists.
* __Tiny bundle size__
* __Blazing fast__
* __TypeScript type definitions__
* __100% test coverage__

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
```

```jsx
<div>
  <Show when={true}>
    <List
      items={[1, 2, 3, 4, 5]}
      render={data => <div>{data}</div>}
    />
  </Show>
</div>
```

## Why

In the example above you see two very common use cases where you have to render something when a condition is true and render content from an array of data.
This is usually solved with inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

Below you can see how it would look with inline arrow functions.

```jsx
<div>
  {true ? (
    {[1, 2, 3, 4, 5].map(data => <div>{data}</div>)}
  ) : null}
</div>
```

The purpose of this library is to provide helpful semantic render components that makes the `React.Component` render method easier to read and follow.

Do you have an idea about a component you think belong here? [Tell us here!](https://github.com/csvenke/react-semantic-render/issues/new)

## Documentation

For full list of components and how they are used, go to our [documentation](https://csvenke.github.io/react-semantic-render/).

## Development

##### Install dependencies
```
$ npm install
```

##### Run linters
```
$ npm run lint
$ npm run lint:fix
```

##### Run tests
```
$ npm run test
$ npm run test:watch
```

##### Build docs
```
$ npm run docs
$ npm run docs:server
```

##### Build project
```
$ npm run build
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. 

* Add unit tests for any new or changed functionality.
* All library components exposed to the user must be documented with jsdoc `/** */`.
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

[MIT](https://github.com/csvenke/react-semantic-render/blob/master/LICENSE)
