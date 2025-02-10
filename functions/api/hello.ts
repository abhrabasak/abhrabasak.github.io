const EMAIL_TRIGGER = "https://api.web3forms.com/submit";

interface Env {
  WEB3FORMS_ACCESS_KEY: string;
}

interface HelloBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailKey {
  access_key: string;
}

const postJsonForm = (data: HelloBody & EmailKey): RequestInit => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
});

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = await context.request.json() as HelloBody;
  const response = await fetch(
    EMAIL_TRIGGER,
    postJsonForm({ ...body, access_key: context.env.WEB3FORMS_ACCESS_KEY }),
  );

  if (response.ok) {
    const result = await response.json();
    return Response.json(result);
  } else {
    return new Response(null, { status: 500 });
  }
};
