import { Resend } from "resend";

interface HelloBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const email = (body: HelloBody) => ({
  from: "Resend @ ABHRA.IN <resend@abhra.in>",
  to: "delivered@resend.dev",
  subject: body.subject,
  html: `<p><b>Sender:</b> ${body.email}</p>
    <p>${body.message}</p>`,
  text: `Sender: ${body.email}\n${body.message}`,
});

export async function POST(req: Request) {
  const body = await req.json() as HelloBody;
  const resend = new Resend(process.env.RESEND_API_KEY);
  // const { data, error } = await resend.emails.send(email(body));
  console.log(body);
  const { data, error } = { data: {}, error: {} };

  if (error == null) {
    return Response.json({ ...data, message: "Email Sent" });
  } else {
    return Response.json({ ...error }, { status: 500 });
  }
}
