import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Here you would typically send this data to your email service or database
    // For now, we'll just log it and return a success response
    console.log("Contact form submission:", { name, email, message })

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}

