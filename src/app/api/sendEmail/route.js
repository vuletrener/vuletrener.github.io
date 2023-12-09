import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(request) {
  try {
    const {name, contactDetails, selectedDate} = await request.json()

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
      subject: `${name} šalje zahtev za trening!`,
      html: `
      <h2>Ime: ${name}</h2>
      <h2>Kontakt: ${contactDetails}</h2>
      <h2>Datum: ${selectedDate}</h2>
      `,
    };

   await transport.sendMail(mailOptions)

   return NextResponse.json({message: "Email sent successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Failed to send."},{status: 500})
  }

    }
  
