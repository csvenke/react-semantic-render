### Example usage

```jsx
const Button = ({ label }) => <button>{label}</button>;
const HideableButton = Hideable(Button);

const App = ({ hide }) => <HideableButton hideComponent={hide} label="Click me!" />;

<App hide={false} />;
```
