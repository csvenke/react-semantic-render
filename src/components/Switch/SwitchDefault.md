### How to use

```jsx static
import React from 'react';
import { Switch } from 'react-semantic-render';
```

#### With render prop
##### Output

```jsx
<Switch.Default 
  render={() => <div>Render me!</div>} 
/>
```

#### With children
##### Output

```jsx
<Switch.Default>
  <div>Render me!</div>
</Switch.Default>
```