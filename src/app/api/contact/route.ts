import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, purpose, message } = body;

  // Simulate email sending logic or replace with another service if needed
  console.log("Contact form submission received:", {
    name,
    email,
    phone,
    purpose,
    message,
  });

  try {
    // Simulate success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}