const EMAIL_TRIGGER = "https://api.resend.com/emails";

interface HelloBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Email {
  from: string;
  to: string;
  subject: string;
  html: string;
}

const email = (body: HelloBody): Email => ({
  from: "Resend @ ABHRA.IN <resend@abhra.in>",
  to: "abhra@outlook.in",
  subject: body.subject,
  html: `<p><b>Sender:</b> ${body.email}</p>
    <p>${body.message}</p>`,
});

const postJsonForm = (data: Email): RequestInit => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
  },
  body: JSON.stringify(data),
});

export async function POST(req: Request) {
  const body = await req.json() as HelloBody;
  const response = await fetch(EMAIL_TRIGGER, postJsonForm(email(body)));

  if (response.ok) {
    const result = await response.json();
    return Response.json(result);
  } else {
    return Response.error();
  }
}
