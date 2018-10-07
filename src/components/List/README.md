### Example usage

```jsx
const data = _.range(10).map(() => faker.name.findName());

const App = () => (
  <ul>
    <List
      items={data}
      render={i => (
        <li key={i}>
          <div>{i}</div>
        </li>
      )}
    />
  </ul>
);

<App />;
```
