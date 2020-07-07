import React from 'react'

const UserCard = (props) => {
  const {avatar_url, name, login, location, html_url, followers, following, bio} = props.data

  return (
    <div>
      <img src={avatar_url} alt="Profile" />
      <div>
        <h2>{name}</h2>
        <h3>{login}</h3>
        {location && <p>Location: {location}</p>}
        <p>Profile: <a href={html_url}>{html_url}</a></p>
        {followers && <p>Followers: {followers}</p>}
        {following &&<p>Following: {following}</p>}
        {bio && <p>Bio: {bio}</p>}
      </div>
    </div>
  )
}

export default UserCard