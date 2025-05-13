import { NextResponse } from "next/server"
import { saveContactSubmission } from "@/lib/mongodb"
import { sendEmail, generateContactConfirmationEmail, generateAdminNotificationEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: "Name, email, and message are required" }, { status: 400 })
    }

    // Save to database
    try {
      // Save to database
      const data = await saveContactSubmission({
        name,
        email,
        company,
        message,
      })

      // Send confirmation email to user
      const userEmail = generateContactConfirmationEmail(name, email, message)
      console.log("success check1")
      await sendEmail(userEmail)

      // Send notification email to admin
      const adminEmail = generateAdminNotificationEmail(name, email, company || "", message)
      await sendEmail(adminEmail)

      return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
    } catch (error) {
      console.error("Error saving contact submission:", error)
      return NextResponse.json({ success: false, message: "Failed to save your message" }, { status: 500 })
    }

    // Send confirmation email to user
    const userEmail = generateContactConfirmationEmail(name, email, message)
    await sendEmail(userEmail)

    // Send notification email to admin
    const adminEmail = generateAdminNotificationEmail(name, email, company || "", message)
    await sendEmail(adminEmail)

    return NextResponse.json({ success: true, message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
  }
}
