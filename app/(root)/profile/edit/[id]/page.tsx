import { RouteParams } from '@/types/global'

const EditProfile = async ({ params}: RouteParams) => {

  const { id } = await params;

  return (
    <div>Edit Profile: {id}</div>
  )
}

export default EditProfile