import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const {name, contactDetails} = await request.json()

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${contactDetails})`,
      text: contactDetails,
    };

   await transport.sendMail(mailOptions)

   return NextResponse.json({message: "Email sent successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Failed to send."},{status: 500})
  }

    }
  
