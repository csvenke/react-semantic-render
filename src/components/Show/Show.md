### How to use

```jsx static
import React from 'react';
import { Show } from 'react-semantics';
```

#### With render prop
##### Output

```jsx
const data = faker.fake("{{lorem.words}}");

<Show 
  when={true}
  render={() => (
    <div>{data}</div>
  )}
/>
```


#### With children
##### Output

```jsx
const data = faker.fake("{{lorem.words}}");

<Show when={true}>
  <div>{data}</div>
</Show>
```