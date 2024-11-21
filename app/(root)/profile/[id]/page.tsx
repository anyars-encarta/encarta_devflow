import React from 'react'

const Profile = ({params}: {params: {id: string}}) => {
  const id = parseInt(params.id);

  return (
    <div>Showing Questions for Profile {id}</div>
  )
}

export default Profile