import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components'

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
    // .then(() => {
    //   const newFollowers = this.state.followers.map(follower => {
    //     axios.get(follower.html_url).then(res => {
    //       console.log(follower.html, res.data)
    //       return res.data
    //     })
    //   })
    //   this.setState({
    //     ...this.state,
    //     followers: newFollowers
    //   })
    // })
  }

  displayContent() {
    return (
      <StyledContainer>
        <h1>Github User Cards</h1>
        <UserCard data={this.state.data} />
        {this.state.followers.map(follower => {
          return <UserCard key={uuid()} data={follower} />
        })}
      </StyledContainer>
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

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 0;
`