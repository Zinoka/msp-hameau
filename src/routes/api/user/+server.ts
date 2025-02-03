import type { RequestHandler } from "@sveltejs/kit";
import { getUserByEmail, getUserByAccessToken } from "$lib/entities/User";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email et mot de passe requis.' }), {
        status: 400
      });
    }
    const body = {
      email: email,
      password: password
    }
    const user = await getUserByEmail(body);
    return new Response(JSON.stringify(user));
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur' }), {
      status: 500
    });
  }
}

export const GET: RequestHandler = async ({ request }) => {
  try {
    const authHeader = request.headers.get("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Token manquant ou invalide" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    const token = authHeader.split(" ")[1];
    const canConnect = await getUserByAccessToken(token);

    if (canConnect) {
      return new Response(JSON.stringify({ message: "Accès autorisé" }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ message: "Accès non autorisé" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Erreur côté serveur :", error);
    return new Response(JSON.stringify({ error: 'Erreur interne du serveur' }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
