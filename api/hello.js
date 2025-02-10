const EMAIL_TRIGGER = "https://api.web3forms.com/submit";

const postJsonForm = (data) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
});

export async function POST(req) {
  const body = await req.json();
  const response = await fetch(
    EMAIL_TRIGGER,
    postJsonForm({ ...body, access_key: process.env.WEB3FORMS_ACCESS_KEY }),
  );

  if (response.ok) {
    const result = await response.json();
    return Response.json(result);
  } else {
    return Response.error();
  }
}
