<script lang="ts">
    import { initializeStores } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { userStore, type AuthUser } from "$lib/stores/authStore"
    import { page } from "$app/stores"

    initializeStores();

    try {
		onMount(async () => {
			const authUser: AuthUser | null | undefined = $userStore
			if (
				(!authUser && $page.url.pathname === "/protected") ||
				($userStore && $page.url.pathname === "/GLhOapcPDMbrLVdv")
			) {
				await goto("/")
			}
		})
	} catch (err) {
		throw new Error(`Erreur lors de l'affichage de la page "/"\n ${err}`)
	}
</script>

<slot />