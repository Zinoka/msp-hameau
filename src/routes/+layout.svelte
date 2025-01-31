<script lang="ts">
	import { initializeStores } from "@skeletonlabs/skeleton";
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import { userStore, type AuthUser } from "$lib/stores/authStore";
	import { page } from "$app/stores";
	import CookieBanner from "$lib/components/CookieBanner.svelte";
	import CookieConsent from "$lib/components/CookieConsent.svelte";
	import NavBar from "$lib/components/NavBar.svelte";
	import Cookies from "js-cookie";

	initializeStores();

	try {
		onMount(async () => {
			const authUser: AuthUser | null | undefined = $userStore;
			if (
				(!authUser && $page.url.pathname === "/protected") ||
				($userStore && $page.url.pathname === "/GLhOapcPDMbrLVdv") ||
				(!authUser && $page.url.pathname === "/protected/ads")
			) {
				await goto("/");
			}

			const preferences = JSON.parse(
				Cookies.get("cookie_preferences") || "{}",
			);
			console.log("pref", preferences);
		});
	} catch (err) {
		throw new Error(`Erreur lors de l'affichage de la page "/"\n ${err}`);
	}
</script>

<NavBar />
<CookieBanner />
<slot />
