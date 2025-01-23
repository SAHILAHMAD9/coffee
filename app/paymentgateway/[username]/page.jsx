"use client";
import React, { use, useEffect, useState } from 'react';
import { EvervaultCard, Icon } from "@/components/ui/HoverCard";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";
import Input from "@/components/ui/Input";
import dbConnect from '@/db/dbConnect';
import User from '@/models/User';
import { initiate } from '@/actions/useractions';

const Page = ({ params }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const resolvedParams = use(params);
  const username = resolvedParams.username;
  const [user, setuser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    name: "",
    message: "",
    amount: "",
  });
  
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        await dbConnect();
        const response = await User.findOne({ username: username });

        if (!response) {
          setError("User not found");
        } else {
          const userData = response.toObject();
          setuser(userData);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    setPaymentForm((prev) => ({
      ...prev,
      [event.target.name] : event.target.value,
    }));
    console.log(paymentForm);
    
  }; 

  const pay = async (amount) => {
    // Get the order Id 
    let a = await initiate(amount, username, paymentForm)
    let orderId = a.id
    var options = {
        "key": process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Get Me A Chai", //your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            "name": "Gaurav Kumar", //your customer's name
            "email": "gaurav.kumar@example.com",
            "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    }

    var rzp1 = new Razorpay(options);
    rzp1.open();
}

  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-center relative items-center text-white">
      {/* Cover Image Container */}
      <div className='absolute top-0 w-full p-2 sm:p-4 h-[250px] sm:h-[350px] lg:h-[450px]'>
        <img
          src={'/Cover.jpg'}
          className='w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl object-cover'
          alt='Cover image'
        />
      </div>

      {/* Main Content Container */}
      <div className='flex flex-col w-full mt-[100px] items-center justify-center sm:mt-[150px] lg:mt-[200px] px-4 sm:px-6 lg:px-8'>
        {/* Evervault Card Container */}
        <div className="border border-white/[0.2] flex flex-col items-start 
                      w-[90%] sm:w-[70%] lg:max-w-sm mx-auto p-3 sm:p-4 
                      relative h-[20rem] sm:h-[25rem] lg:h-[30rem]">
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -left-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -top-3 -right-3 text-white" />
          <Icon className="absolute h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 -bottom-3 -right-3 text-white" />
          <EvervaultCard username={username} name={session?.user?.name} src={session?.user?.image || '/Cover.jpg'} />
        </div>
        {loading && <p>Loading...</p>}
        {/* Payment Form */}
        <div className='relative flex items-center justify-between w-full gap-4 m-4 flex-col md:flex-row py-8'>

{/* ****************** MASSAGE BOX ***************** */}

<div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
  <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
    Supporters
  </h1>
</div>

{/* ****************** PAYMENT paymentFORM ***************** */}

<div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
  <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-even ts-none" />

  <div className="mx-auto relative z-20 w-full h-full border border-slate-900  p-4 md:px-8 shadow-input bg- black">
    <h2 className="font-bold text-xl sm:text-2xl text-neutral-200">
      Make a Payment
    </h2>
    <form className="my-6 sm:my-8">
      <LabelInputContainer className="mb-4">
        {/* <Label className='text-white text-sm sm:text-base' htmlFor="name">Email Address</Label> */}
        <Input
          name="name" id="name" value={paymentForm.name} onChange={changeHandler} placeholder="Your Name" type="text"
          className="text-sm sm:text-base" autoComplete="new-name" />
           </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        {/* <Label className='text-white text-sm sm:text-base' htmlFor="massage">Password</Label> */}
        <Input
          name="message" id="message" value={paymentForm.message} onChange={changeHandler} placeholder="Type Your Message" type="text"
           className="text-sm sm:text-base"
          autoComplete="new-massage"
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        {/* <Label className='text-white text-sm sm:text-base' htmlFor="massage">Password</Label> */}
        <Input
          name="amount" id="amount" value={paymentForm.amount} onChange={changeHandler} placeholder="Enter the Amount" type="number"
           className="text-sm sm:text-base"
          autoComplete="new-amaount"
        />
      </LabelInputContainer>

      <button
      onClick={() => pay(paymentForm.amount * 100)}
        className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit">
        Pay &rarr;
        <BottomGradient />
      </button>
      <div className='flex flex-row items-center justify-between gap-8 py-4'>
        <div
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Pay 50
          <BottomGradient />
        </div>
        <div
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Pay 100
          <BottomGradient />
        </div>
        <div
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 flex items-center justify-center bg-zinc-800 w-full text-white rounded-md h-9 sm:h-10 font-medium text-sm sm:text-base shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
          Pay 500
          <BottomGradient />
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-6 sm:my-8 h-[1px] w-full" />
    </form>
  </div>


</div>
</div>

      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


export default Page;
