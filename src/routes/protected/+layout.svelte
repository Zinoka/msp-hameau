<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { userStore } from "$lib/stores/authStore";
    import { get } from "svelte/store";

    onMount(async () => {
        const userData = get(userStore) || "{}";

        if (userData.accessToken) {
            const canAccess = fetchProtectedData(userData.accessToken);

            if (!canAccess) {
                await goto("/");
            }
        } else {
            await goto("/");
        }
    });

    async function fetchProtectedData(accessToken: string) {
        try {
            const response = await fetch("/api/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            return response.status === 200 ? false : true;
        } catch (error) {
            console.error(
                "Erreur lors de la récupération des données :",
                error,
            );
            return true;
        }
    }
</script>

<slot />
