import { connectDb } from "@/lib/db";
import User from "@/models/UserModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { fullname, email, password } = await req.json();

    await connectDb();

    const userExists = await User.findOne({ email });

    if (!userExists) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userData = await User.create({
        fullname,
        email,
        password: hashedPassword,
      });
      console.log(userData);
      return NextResponse.json(
        { message: "User Registration Success", data: userData },
        { status: 201 }
      );
    } else {
      console.log("User already exists.");
      return NextResponse.json(
        { messgae: "User already exists" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error Occured" }, { status: 400 });
  }
}
