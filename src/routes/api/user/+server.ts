import { getUserByEmail } from "$lib/entities/User";

export const POST = async (event) => {
  const body = await event.request.json();
  const user = await getUserByEmail(body);
  return new Response(JSON.stringify(user));
};
