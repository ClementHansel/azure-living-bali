import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Data = {
  ok?: boolean;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body as {
      name: string;
      email: string;
      phone: string;
      message: string;
    };

    console.log("Sending email with data:", { name, email, phone, message });

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      subject: "New Contact Form Submission",
      html: `
        <h2>New message from website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend email error:", err);
    const errorMessage = err instanceof Error ? err.message : "Email failed";
    return res.status(500).json({ error: errorMessage });
  }
}
