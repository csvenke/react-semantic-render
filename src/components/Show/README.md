### Example usage

```jsx
<Show
  when={true}
  render={() => (
    <div>Render me!</div>
  )}
/>

<Show when={false}>
  <div>Don't render me!</div>
</Show>
```
