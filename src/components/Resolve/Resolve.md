```jsx
const data = [1,2,3].map(() => faker.fake("{{lorem.sentence}}"));

class Example extends React.Component {
  render() {
    return (
      <>
        <List
          items={data}
          render={(v,i) => (
            <Resolve 
              promise={this._getData(v)}
              pending={<div key={i}>Fetching data...</div>}
              resolved={value => (
                  <div key={i}>{v}</div>
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