import React from 'react'

const Profile = ({params}: {params: {id: string}}) => {
  const id = params.id;

  return (
    <div>Showing Questions for Profile {id}</div>
  )
}

export default Profile