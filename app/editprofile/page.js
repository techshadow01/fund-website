'use server'

import EditProfile from '../components/editprofile'

const page = ({ params }) => {
    return (
        <>
            <EditProfile username={params.username} />
        </>
    )
}

export default page