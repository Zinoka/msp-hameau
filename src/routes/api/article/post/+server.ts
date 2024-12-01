import { createArticle } from "$lib/entities/Article";

export const POST = async (event) => {
  const body = await event.request.json();
  const user = await createArticle(body);
  return new Response(JSON.stringify(user));
};
