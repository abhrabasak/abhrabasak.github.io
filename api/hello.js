import { Resend } from "resend";

const email = (body) => ({
  from: "Resend @ ABHRA.IN <resend@abhra.in>",
  to: "abhra@outlook.in",
  subject: body.subject,
  html: `<p><b>Sender:</b> ${body.email}</p>
    <p>${body.message}</p>`,
});

export async function POST(req) {
  const body = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send(email(body));

  if (error == null) {
    return Response.json({ ...data, message: "Email Sent" });
  } else {
    return Response.json({ ...error }, { status: 500 });
  }
}
