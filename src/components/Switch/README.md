### Static methods

These helper components can be accessed from the `Switch` component.

**Switch.Case**

```jsx
<Switch.Case value={123}>
  <button>Click me!</button>
</Switch.Case>
```

**Switch.Default**

```jsx
<Switch.Default>
  <button>Click me!</button>
</Switch.Default>
```

### Example usage

```jsx
const App = ({ showCatchPhrase }) => (
  <Switch value={showCatchPhrase}>
    <Switch.Case value={1}>
      <span>
        {'1: '}
        {faker.fake('{{company.catchPhrase}}')}
      </span>
    </Switch.Case>

    <Switch.Case value={2}>
      <span>
        {'2: '}
        {faker.fake('{{company.catchPhrase}}')}
      </span>
    </Switch.Case>

    <Switch.Default>
      <span>
        {'default: '}
        {faker.fake('{{company.catchPhrase}}')}
      </span>
    </Switch.Default>
  </Switch>
);

<App showCatchPhrase={1} />;
```
