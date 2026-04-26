import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "deepanjay.nandal12@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "email service not configured" }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "all fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "invalid email address" }, { status: 400 });
    }

    await resend.emails.send({
      from: "portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `portfolio contact from ${name}`,
      text: `name: ${name}\nemail: ${email}\n\nmessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "failed to send message" }, { status: 500 });
  }
}
