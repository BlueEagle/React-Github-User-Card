import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import { v4 as uuid } from 'uuid';

const username = 'BlueEagle'
const api_addr = `https://api.github.com/users/${username}`
const followers_addr = `https://api.github.com/users/${username}/followers`

class App extends React.Component {
  state = {
    data: [],
    followers: []
  }

  componentDidMount() {
    axios.get(api_addr).then(res => {
      this.setState({
        ...this.state,
        data: res.data
      })
    })
    .then(() => {
      axios.get(followers_addr).then(res => {
        this.setState({
          ...this.state,
          followers: res.data
        })
      })
    })
  }

  displayContent() {
    return (
      <div>
        <UserCard data={this.state.data} />
        {this.state.followers.map(follower => {
          return <UserCard key={uuid()} data={follower} />
        })}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.data.length === 0 ? 
          'Please wait while data loads...' : 
          this.displayContent()}
        </header>
      </div>
    )
  };
}

export default App;
