<p align="center"><img src='./media/logo.png' width="20%" alt='logo' /></p>

<h1 align="center"><br>react-semantics<br></h1>

<h4 align="center">Semantic helper components for working with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/react-semantics">
    <img src="https://badge.fury.io/js/react-semantics.svg" alt="npm package" />
  </a>
  <a href="">
    <img src="https://travis-ci.com/csvenke/react-semantics.svg?branch=master" alt="build status" />
  </a>
  <a href="">
    <img src="https://david-dm.org/csvenke/react-semantics.svg" alt="dependencies status" />
  </a>
  <a href="https://greenkeeper.io/">
    <img src="https://badges.greenkeeper.io/csvenke/react-semantics.svg" alt="greenkeeper" />
  </a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#example-usage">Example usage</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#development-setup">Development setup</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

Are you tired of your react components looking like an unreadable mess?
Have you often asked yourself: "there must be a better way!"?
Then look no further, because this library is just what you need!

Multiple studies from reputable anonymous sources have shown that projects using this library have 24% higher productivity and increased life satisfaction.
Does this sound too good to be true?
Do you start to see through this shallow pitch for yet another react component library?

Reject those thoughts and allow me to demonstrate the might of this library with a simple example below!

### Before

Here you see two common use cases where you have to show something when a condition is true and map content from an array of data.
This is normally solved by inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

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
);
```

### After

Here you see all inline arrow functions replaced by semantic components that are easy to read and understand.
What they do are intuitively obvious due to careful naming and all the noise from inline arrow functions are removed.

It's components all the way down.

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

## Installation

```bash
$ npm install react-semantics
```

## Example usage

```jsx
import { Show } from 'react-semantics';

<Show when={true}>
  <div>Render me!</div>
</Show>
```

## Documentation

https://csvenke.github.io/react-semantics/


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

1.  Fork repository
1.  Create feature branch
1.  Commit changes
1.  Push to branch
1.  Create new pull request

## License

This project is licensed under the MIT License - see [LICENSE](https://github.com/csvenke/react-semantics/blob/master/LICENSE) file for details.
