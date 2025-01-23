// app/api/users/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/db/dbConnect';
import User from '@/models/User';

export async function GET() {
  try {
    console.log("Connecting to database...");
    await dbConnect();
    console.log("Connected to database successfully");
    
    const users = await User.find().lean();
    console.log("Fetched users:", users);
    
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error in GET /api/users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}