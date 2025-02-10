export const onRequest: PagesFunction = async (context) => {
  return new Response("Cloudflare:PONG");
};
