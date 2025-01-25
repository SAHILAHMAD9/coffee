"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import dbConnect from "@/db/dbConnect"

export const initiate = async (amount, to_username, paymentForm) => {
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

export const profileUpdate = async ( data , oldUsername ) => {
    try {
        await dbConnect()
        let newData = Object.fromEntries(data);
        if (oldUsername !== newData.username) {
            const u = await User.findOne({username : newData.username});
            if (u) {
                console.log('username alredy exist');
                return { error: "Username already exists" }
            }
            await User.updateOne({email: newData.email},newData)
            await Payment.updateMany({to_user: oldUsername}, {to_user: newData.username})
        } else {
            await User.updateOne({email: newData.email}, newData) 
        }

    } catch (error) {
        console.log('error in profile update useraction');
        
    }
}