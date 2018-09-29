### Static methods

These helper components can be accessed from the `Switch` component.

**Switch.Case**

```jsx
<Switch.Case value={123}>
  <div>Render me!</div>
</Switch.Case>

<Switch.Case
  value={321}
  render={() => <div>Render me too!</div>}
/>
```

**Switch.Default**

```jsx
<Switch.Default>
  <div>Render me!</div>
</Switch.Default>

<Switch.Default
  render={() => <div>Render me too!</div>}
/>
```

### Example usage

```jsx
<Switch value={4}>
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
