'use server'

import Paymentpage from "../components/PaymentPage"

const page = ({ params }) => {
    return (
        <>
            <Paymentpage username={params.username} />
        </>
    )
}

export default page