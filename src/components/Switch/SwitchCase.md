
### How to use

```jsx static
import React from 'react';
import { Switch } from 'react-semantic-render';
```

#### With render prop
##### Output

```jsx
<Switch.Case 
  value={'anything'}
  render={() => <div>Render me!</div>}
/>
```

#### With children
##### Output

```jsx
<Switch.Case value={'something'}>
  <div>Render me!</div>
</Switch.Case>
```