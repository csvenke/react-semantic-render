### Example usage

Simple example with children.

```jsx
const showButton = true;

const App = () => (
  <Show when={showButton}>
    <button>Click me!</button>
  </Show>
);

<App />;
```

Simple example with render. <br />
_Use this when you don't want your content evaluated unless an condition is true._

```jsx
let obj = undefined;

obj = {
  label: 'Click me!',
};

const App = () => (
  <Show
    when={!!obj}
    render={() => (
      <button>
        <span>{obj.label}</span>
      </button>
    )}
  />
);

<App />;
```
