import { getUserByEmail } from "$lib/entities/User";

export const POST = async (event) => {
  console.log("POST /api/user/", event.request);
  const body = await event.request.json();
  const user = await getUserByEmail(body);
  return new Response(JSON.stringify(user));
};
