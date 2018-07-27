```jsx
<List 
  items={[1, 2, 3]}
  render={n => (
    <div key={n}>{`Render me! ${n}`}</div>
  )}
/>
```