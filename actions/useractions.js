'use server'

import Razorpay from 'razorpay'
import connectDb from '@/db/connectDB'
import User from '@/models/User'
import Payment from '@/models/Payment'

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    // fetch the secret of the user who is getting the payment 
    // let user = await User.findOne({ username: to_username })
    // const secret = user.razorpaysecret

    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.NEXT_PUBLIC_KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x
}

//create payment slip
export const createPayments = async (paymentform) => {
    await connectDb()

    await Payment.create({
        username: paymentform.username,
        name: paymentform.name,
        amount: paymentform.amount,
        msg: paymentform.msg,
        to_user: paymentform.to_user
    })

}

//fetch payment info from mongo db
export const fetchpayments = async (username) => {
    await connectDb();

    let p1 = await Payment.find({ to_user: username }).sort({ amount: -1 });
    // const p = p1.map(payment => {
    //     payment.toObject({ flattenObjectsIds: true })
    // });
    const p = JSON.stringify(p1)

    return p;
}

//fetch user info from mongo db
export const fetchuser = async (username) => {
    try {
        await connectDb();
        console.log(username)
        const u = await User.findOne({ username: username });

        if (!u) {
            throw new Error('User not found');
        }

        // Convert to plain object with flattened IDs
        const user = JSON.stringify(u);

        return user;
    } catch (error) {
        // Handle any errors that might occur
        console.error('Error fetching user:', error);
        throw new Error('Unable to fetch user');
    }
};

//fetch all users info
export const fetchcards = async () => {
    await connectDb();
    let p1 = await User.find({});  // Fetch users from the database
    let p = JSON.stringify(p1);
    return p;
};

//update user info
export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = data
    console.log(ndata, oldusername, ndata.username)

    // If the username is being updated, check if username is available
    if (oldusername != ndata.username) {
        let u = await User.findOne({ email: ndata.email })
        u.toObject({ flattenObjectsIds: true });
        if (u) {
            return { error: "Username already exists" }
        }
        await User.updateOne({ email: ndata.email }, ndata)
        // Now update all the usernames in the Payments table 
        //await Payment.updateMany({ to_user: oldusername }, { to_user: ndata.username })
    }
    else {
        await User.updateOne({ email: ndata.email }, ndata)
    }
}
