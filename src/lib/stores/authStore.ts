import type { Writable } from "svelte/store";
import { goto } from "$app/navigation";
import { localStorageStore } from "@skeletonlabs/skeleton";

export interface AuthUser {
  uid: string | undefined;
  email: string | undefined;
}

export const userStore: Writable<AuthUser | undefined | null> =
  localStorageStore("user", undefined);

export const authHandlers = {
  logOut: async (): Promise<void> => {
    try {
      userStore.set(null);
    } catch (err) {
      throw new Error(
        `Erreur lors du nettoyage du store de l'utilisateur, ${err}`
      );
    }
  },
  logIn: async (
    email: string,
    password: string
  ): Promise<AuthUser | undefined> => {
    try {
      const result = await fetch("/api/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-sveltekit-action": "true",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const user = await result.json();

      if (user) {
        if (Object.keys(user).length > 0) {
          const userCredentials: AuthUser = {
            uid: user.id,
            email: user.email,
          };
          return userCredentials;
        } else {
          return undefined;
        }
      }
    } catch (err) {
      throw new Error(
        `Erreur lors du remplissage du store utilisateur, ${err}`
      );
    }
  },
};
