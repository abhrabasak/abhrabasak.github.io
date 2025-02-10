import { KVNamespace, PagesFunction, Response } from "@cloudflare/workers-types";

const EMAIL_TRIGGER = "https://api.web3forms.com/submit";

interface Env {
  KV: KVNamespace;
}

interface EmailBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailKey {
  access_key: string;
}

const postJsonForm = (data: EmailBody & EmailKey) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),
});

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const body = await context.request.json() as EmailBody;

  const response = await fetch(
    EMAIL_TRIGGER,
    postJsonForm({ ...body, access_key: process.env.WEB3FORMS_ACCESS_KEY! }),
  );

  const result = await response.json();
  if (result.success) {
    return new Response(JSON.stringify(result), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(null, { status: 500 });
  }
};
