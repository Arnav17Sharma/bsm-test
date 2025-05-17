import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  try {
    const response = await resend.emails.send({
      from: 'BSM Support <onboarding@resend.dev>', // Replace with your verified sender
      to,
      subject,
      html,
    })
    return { success: true, response }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

export function generateContactConfirmationEmail(name: string, email: string, message: string) {
  return {
    to: email,
    subject: "Thank you for contacting BSM",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">BSM</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Thank you for contacting us, ${name}!</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p>If you have any additional questions, please don't hesitate to reach out.</p>
          <p>Best regards,<br>The BSM Team</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} BSM (B S Marketing Company). All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    `,
  }
}

export function generateAdminNotificationEmail(name: string, email: string, company: string, message: string) {
  return {
    to: "samarth@bsmarketingcompany.com", // Replace with your admin email
    subject: "New Contact Form Submission",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">BSM Admin Notification</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>New Contact Form Submission</h2>
          <p>You have received a new contact form submission with the following details:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Company:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb;">${company || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Message:</td>
              <td style="padding: 10px; border: 1px solid #e5e7eb; white-space: pre-line;">${message}</td>
            </tr>
          </table>
          <p>Please log in to the admin dashboard to respond to this inquiry.</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} BSM (B S Marketing Company). All rights reserved.</p>
        </div>
      </div>
    `,
  }
}

export function generateNewsletterConfirmationEmail(email: string, confirmationToken: string) {
  const confirmationUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/newsletter/confirm?token=${confirmationToken}`

  return {
    to: email,
    subject: "Confirm your subscription to BSM Newsletter",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">BSM Newsletter</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Confirm your subscription</h2>
          <p>Thank you for subscribing to the BSM Newsletter! To complete your subscription, please click the button below:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmationUrl}" style="background-color: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Confirm Subscription</a>
          </div>
          <p>If you didn't request this subscription, you can safely ignore this email.</p>
          <p>Best regards,<br>The BSM Team</p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} BSM (B S Marketing Company). All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    `,
  }
}

export function generateNewsletterWelcomeEmail(email: string, unsubscribeToken: string) {
  const unsubscribeUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/newsletter/unsubscribe?token=${unsubscribeToken}`

  return {
    to: email,
    subject: "Welcome to BSM Newsletter!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #3b82f6; padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">BSM Newsletter</h1>
        </div>
        <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
          <h2>Welcome to our Newsletter!</h2>
          <p>Thank you for confirming your subscription to the BSM Newsletter!</p>
          <p>You'll now receive updates on:</p>
          <ul>
            <li>Latest industry trends in distribution and logistics</li>
            <li>New service offerings from BSM</li>
            <li>Case studies and success stories</li>
            <li>Tips and best practices for optimizing your distribution</li>
          </ul>
          <p>We're excited to have you join our community!</p>
          <p>Best regards,<br>The BSM Team</p>
          <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">
            If you wish to unsubscribe, <a href="${unsubscribeUrl}" style="color: #3b82f6;">click here</a>.
          </p>
        </div>
        <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
          <p>© ${new Date().getFullYear()} BSM (B S Marketing Company). All rights reserved.</p>
          <p>This is an automated message, please do not reply to this email.</p>
        </div>
      </div>
    `,
  }
}
