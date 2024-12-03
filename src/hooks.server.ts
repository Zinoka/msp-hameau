import { building } from "$app/environment";
import TypeOrm from "$lib/server/database/database";
import * as dotenv from "dotenv";
import "reflect-metadata";

export let env_variables: dotenv.DotenvConfigOutput;
export let db: any;

if (!building) {
  env_variables = dotenv.config();
  db = await TypeOrm.getDb();
}

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const cookiePreferences = event.cookies.get("cookie_preferences");

  if (!cookiePreferences) {
    // Définir les cookies par défaut si non présents
    event.cookies.set(
      "cookie_preferences",
      JSON.stringify({ essential: true, analytics: false, marketing: false }),
      {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      }
    );
  }

  return resolve(event);
}
