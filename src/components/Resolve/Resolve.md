### How to use

```jsx static
import React from 'react';
import { Resolve } from 'react-semantics';
```
##### Output

```jsx
const data = [1,2,3].map(() => faker.fake("{{lorem.sentence}}"));

class Example extends React.Component {
  render() {
    return (
      <>
        <List
          items={data}
          render={v => (
            <Resolve 
              key={v}
              promise={this._getData(v)}
              pending={<div>Fetching data...</div>}
              resolved={value => (
                  <div>{v}</div>
              )}
            />
          )}
        />
        <button style={{marginTop: '16px'}} onClick={() => this.forceUpdate()}>Reload</button>
      </>
    )
  }

  _getData(data) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, Math.floor(Math.random() * Math.floor(3000)))
    })
  }
}

<Example />
```