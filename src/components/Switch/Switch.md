
### Static methods

These helper components can be accessed from the `Switch` component like this `<Switch.Case />`.

* [Case](#/SwitchCase)
* [Default](#/SwitchDefault)

### How to use

```jsx static
import React from 'react';
import { Switch } from 'react-semantic-render';
```

##### Output

```jsx
<Switch value={3}>
  <Switch.Case value={1}>
    <div>Render me!</div>
  </Switch.Case>
  <Switch.Case value={2}>
    <div>No, render me!</div>
  </Switch.Case>
  <Switch.Default>
    <div>Nobody renders better than me!</div>
  </Switch.Default>
</Switch>
```