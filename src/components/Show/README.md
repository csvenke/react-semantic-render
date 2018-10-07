### Example usage

```jsx
const App = ({ showButton }) => (
  <div>
    <Show when={showButton}>
      <button>Click me!</button>
    </Show>
    <Show when={!showButton}>
      <button>No, click me!</button>
    </Show>
  </div>
);

<App showButton={true} />;
```
