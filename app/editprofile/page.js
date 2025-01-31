'use server'

import EditProfile from '../components/Editprofile'

const page = ({ params }) => {
    return (
        <>
            <EditProfile username={params.username} />
        </>
    )
}

export default page
