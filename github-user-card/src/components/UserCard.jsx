import React from 'react'
import styled from 'styled-components'

const UserCard = (props) => {
  const {avatar_url, name, login, location, html_url, followers, following, bio} = props.data

  return (
    <StyledCard>
      <StyledImg src={avatar_url} alt="Profile" />
      <div>
        <h2>{name}</h2>
        <h3>{login}</h3>
        {location && <p>Location: {location}</p>}
        <p>Profile: <a href={html_url}>{html_url}</a></p>
        {followers && <p>Followers: {followers}</p>}
        {following &&<p>Following: {following}</p>}
        {bio && <p>Bio: {bio}</p>}
      </div>
    </StyledCard>
  )
}

export default UserCard

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`
const StyledCard = styled.div`
  margin: 2% 0;
  padding: 3% 2%; 
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  background-color: white;
  color: black;
  box-shadow: 0 0 5px lightcyan;

  img {
    margin: 0 2%;
  }
`