```jsx
const data = [1,2,3,4,5,6,7,8,9].map(() => faker.name.findName());

<ul>
  <List 
    items={data}
    render={n => (
      <li key={n}>
        <div>{n}</div>
      </li>
    )}
  />
</ul>
```
