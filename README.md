<h1 align="center">
  <br>
  react-semantics
  <br>
</h1>

<h4 align="center">Semantic helper components for working with <a href="https://reactjs.org/" target="_blank">React</a>.</h4>

<p align="center">
  <a href="https://badge.fury.io/js/react-semantics">
    <img src="https://badge.fury.io/js/react-semantics.svg" alt="Gitter">
  </a>
  <a href="">
    <img src="https://travis-ci.com/csvenke/react-semantics.svg?branch=master" alt="Gitter">
  </a>
  <a href="">
    <img src="https://david-dm.org/csvenke/react-semantics.svg" alt="Gitter">
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

Reject those thoughts and allow me to demonstrate the might of this library with a simple example below!

### Before

```javascript
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

```javascript
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

```javascript
import React from 'react';
import { Show } from 'react-semantics';

<Show when={5 > 4}>
  <div>Render me!</div>
</Show>
```

## API

Coming soon...

## Development setup

```bash
# Install dependencies
$ npm install

# Run tests
npm run test

# Build
npm run build
```

## Contributing

1.  Fork it
1.  Create your feature branch
1.  Commit your changes
1.  Push to the branch
1.  Create a new pull request

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/csvenke/react-semantics/blob/master/LICENSE) file for details.
