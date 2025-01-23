"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import dbConnect from "@/db/dbConnect"


// export const initiate = async (amount, to_username, paymentForm) => {
//     await connectDb()
//     // fetch the secret of the user who is getting the payment 
//     let user = await User.findOne({username: to_username})
//     const secret = process.env.RAZORPAY_SECRET 

//     var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRET })



//     let options = {
//         amount: amount, // Use the amount passed in
//         currency: "INR",
//         receipt: `receipt_${Date.now()}` // Add a unique receipt ID
//     }

//     let x = await instance.orders.create(options)

//     // create a payment object which shows a pending payment in the database
//     await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentForm.name, message: paymentForm.message })

//     return x
// }

export const fetchUser = async (username) => {
    try {
        await dbConnect();
        let user = await User.findOne({username : username})
    } catch (error) {
        
    }
}
export const initiate = async (amount, to_username, paymentForm) => {
    await dbConnect()
    
    let user = await User.findOne({username: to_username})
    
    var instance = new Razorpay({ 
        key_id: process.env.RAZORPAY_KEY, 
        key_secret: process.env.RAZORPAY_SECRET 
    })

    let options = {
        amount: amount, // Make sure this is in paise (smallest currency unit)
        currency: "INR",
        receipt: `receipt_${Date.now()}`
    }

    try {
        let x = await instance.orders.create(options)

        // create a payment object which shows a pending payment in the database
        await Payment.create({ 
            oid: x.id, 
            amount: amount/100, 
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