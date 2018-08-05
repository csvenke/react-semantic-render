### How to use

```jsx static
import React from 'react';
import { ShowAsync } from 'react-semantic-render';
```
##### Output

```jsx
<ShowAsync 
  when={new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 5000)
  })}
  pending={() => <div>Fetching paragraph...</div>}
>
  {value => <div>{faker.fake("{{lorem.paragraph}}")}</div>}
</ShowAsync>
```