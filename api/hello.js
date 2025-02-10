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
  console.log(body);

  const response = await fetch(
    EMAIL_TRIGGER,
    postJsonForm({ ...body, access_key: process.env.WEB3FORMS_ACCESS_KEY }),
  );

  const result = await response.json();
  if (result.success) {
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(null, { status: 500 });
  }
}
