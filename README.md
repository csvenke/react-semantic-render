<p align="center"><img src='./media/logo.png' width="25%" alt='logo' /></p>

<h1 align="center"><br>react-semantics<br></h1>

<h3 align="center">Semantic helper components for working with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/react-semantics">
    <img src="https://badge.fury.io/js/react-semantics.svg" alt="npm package">
  </a>
  <a href="">
    <img src="https://travis-ci.com/csvenke/react-semantics.svg?branch=master" alt="build status">
  </a>
  <a href="">
    <img src="https://david-dm.org/csvenke/react-semantics.svg" alt="dependencies status">
  </a>
</p>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#example-usage">Example usage</a> •
  <a href="#api">API</a> •
  <a href="#development-setup">Development setup</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

Are you tired of your react components looking like an unreadable mess?
Have you often asked yourself: "there must be a better way!"?
Then look no further, because this library is just what you need!

Multiple studies from reputable anonymous sources have shown that projects using `react-semantics` have 24% higher productivity and increased life satisfaction.
Does this sound too good to be true?
Does the rational part of your brain see through this shallow pitch for yet another mediocre react library?

Reject those thoughts and allow me to demonstrate the overwhelming might of this library with a simple example below!

### Before

Here you see two common use cases where you have to show something when a condition is true and map content from an array of data.
This is normally solved by inline arrow functions that are hard to read and easily becomes unmanageable in more complex components.

```jsx
import React from 'react';

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
import React from 'react';
import { Map, Show } from 'react-semantics';

const Menu = ({ showMenuItems }) => (
  <nav>
    <a href="/">Home</a>
    <Show when={showMenuItems}>
      <ul>
        <Map
          array={['prices', 'contact', 'about']}
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

### Show

```jsx
import { Show } from 'react-semantics';

<Show when={5 > 4}>
  <div>Render me!</div>
</Show>
```

### Map

```jsx
import { Map } from 'react-semantics';

<Map
  array={[1, 2, 3, 4, 5]}
  render={n => (
    <div key={n}>{`Render ${n}!`}</div>
  )}
/>
```

### Switch

```jsx
import { Switch } from 'react-semantics';

<Switch value={3}>
  <Switch.Case value={1}>
    <div>Render me!</div>
  </Switch.Case>

  <Switch.Case value={2}>
    <div>No, render me!</div>
  </Switch.Case>

  <Switch.Default>
    <div>Nobody renders better than me!</div>
  </Switch.Default>
</Switch>
```

## API

Coming soon...

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
