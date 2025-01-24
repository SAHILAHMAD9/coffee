"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import dbConnect from "@/db/dbConnect"

export const initiate = async (amount, to_username, paymentForm) => {
    console.log('RAZORPAY_KEY:at server:', process.env.NEXT_PUBLIC_RAZORPAY_KEY);
    console.log('RAZORPAY_SECRET:', process.env.NEXT_PUBLIC_RAZORPAY_SECRET);
    // await dbConnect()
    // let user = await User.findOne({username: to_username})
    var instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        key_secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET
    })
    let options = {
        amount: amount,
        currency: "INR",
        receipt: `receipt_${Date.now()}`
    }
    try {
        let x = await instance.orders.create(options)
        await Payment.create({
            oid: x.id,
            amount: amount / 100,
            to_user: to_username,
            name: paymentForm.name,
            message: paymentForm.message
        })

        return x
    } catch (error) {
        console.error('Razorpay order creation failed:', error);
        throw error;
    }
}

export const fetchUser = async (username) => {
    try {
        await dbConnect();
        let u = await User.findOne({ username: username });
        let user = u.toObject({ flattenObjectIds: true });
        return user;
    } catch (error) {
        console.log("fetching USERS from database failed");
    }
}

export const fetchpayments = async (username) => {
    try {
        await dbConnect();
        let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
        return p
    } catch (error) {
        console.log("fetching PAYMENTS from database failed");
    }
}
