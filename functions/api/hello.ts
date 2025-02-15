import { Resend } from "resend";

interface Env {
  RESEND_API_KEY: string;
}

interface HelloBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const email = (body: HelloBody) => ({
  from: "Resend @ ABHRA.IN <resend@abhra.in>",
  to: "abhra@outlook.in",
  subject: body.subject,
  html: `<p><b>Sender:</b> ${body.email}</p>
    <p>${body.message}</p>`,
});

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = await context.request.json() as HelloBody;
  const resend = new Resend(context.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send(email(body));

  if (error == null) {
    return Response.json({ ...data, message: "Email Sent" });
  } else {
    return Response.json({ ...error }, { status: 500 });
  }
};
