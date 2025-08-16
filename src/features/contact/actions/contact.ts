"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // must be verified in Resend
      to: ["lun.tay.work@gmail.com"], // where you want to receive messages
      subject: `New message from ${name}`,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, error: "Failed to send email" };
  }
}
