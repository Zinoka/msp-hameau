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

	let preferences = {};

	try {
		onMount(async () => {
			const cookieRaw = Cookies.get("cookie_preferences");
			console.log("Cookie récupéré :", cookieRaw);

			preferences = JSON.parse(cookieRaw || "{}");
			console.log("Préférences après parsing :", preferences);

			const authUser: AuthUser | null | undefined = $userStore;
			if (
				(!authUser && $page.url.pathname === "/protected") ||
				($userStore && $page.url.pathname === "/GLhOapcPDMbrLVdv") ||
				(!authUser && $page.url.pathname === "/protected/ads")
			) {
				await goto("/");
			}
		});
	} catch (err) {
		throw new Error(`Erreur lors de l'affichage de la page "/"\n ${err}`);
	}
</script>

<NavBar />
<CookieBanner />

<slot />
