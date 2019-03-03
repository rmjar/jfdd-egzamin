import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {}
    }
  }
  componentDidMount = () => {
    fetch('https://api.randomuser.me/?results=10')
      .then(resp => resp.json())
      .then(resp => {
        const { results  } = resp;
        this.setState(
          {
            results,
          }
        )
      })
  }

  render() {
    const { results = [] } = this.state;
    const arrayRes = Array.from(results);
    console.log(results)
    return (
      <div className="App">
        {arrayRes && arrayRes.map(user => {
          return <div>
            <img src={user.picture.large} />
            <div>{user.name.first} {user.name.last}</div>
            <div>{user.email}</div>
          </div>
        })}
      </div>
    );
  }
}

export default App;
