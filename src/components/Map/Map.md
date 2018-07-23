```jsx static
import React from 'react';
import { Map } from 'react-semantics';
```

```jsx
<Map 
  array={[1, 2, 3]}
  render={n => (
    <div>{`Render me! ${n}`}</div>
  )}
/>
```