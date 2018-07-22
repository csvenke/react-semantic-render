# React semantic helper components

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
npm install react-semantics
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

## License

MIT
