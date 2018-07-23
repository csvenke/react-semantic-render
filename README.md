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
    <img src="https://david-dm.org/csvenke/react-semantics.svg" alt="Gitter">
  </a>
</p>

<p align="center">
  <a href="#install">Install</a> •
  <a href="#usage">Usage</a> •
  <a href="#api">API</a> •
  <a href="#contribute">Contribute</a> •
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
import { ArrayMap, Show } from 'react-semantics';

const Menu = ({ showMenuItems }) => (
  <nav>
    <a href="/">Home</a>
    <Show when={showMenuItems}>
      <ul>
        <ArrayMap
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

## Install

```
npm install --save react-semantics
```

## Usage

```javascript
import { Show } from 'react-semantics';

<Show when={5 === 2 + 2}>
  <div>Will only render in 1984</div>
</Show>
```

## API

Coming soon...

## Contribute

```
# Clone repository
$ git clone https://github.com/csvenke/react-semantics.git

# Go into repository
$ cd react-semantics

# Install dependencies
$ npm install

# Run tests
npm test

# Build
npm run build
```

## License

MIT
