### How to use

```jsx static
import React from 'react';
import { List } from 'react-semantics';
```

#### With render prop
##### Output

```jsx
const data = [1,2,3].map(() => faker.name.findName());

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

#### With children
##### Output

```jsx
const data = [1,2,3].map(() => faker.name.findName());

<ul>
  <List items={data}>
    {n => (
      <li key={n}>
        <div>{n}</div>
      </li>
    )}
  </List>
</ul>
```
