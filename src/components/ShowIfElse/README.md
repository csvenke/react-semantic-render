### Example usage

```jsx
const App = ({ showButton }) => (
  <ShowIfElse
    condition={showButton}
    if={() => <button>Click me!</button>}
    else={() => <button>No, click me!</button>}
  />
);

<App showButton={true} />;
```
