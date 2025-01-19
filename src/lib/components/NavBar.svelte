<script lang="ts">
    import { goto } from "$app/navigation";
    import { authHandlers, userStore } from "$lib/stores/authStore";

    let isburgerMenuOpen = false;
    let init = true;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function burgerToggle() {
        init = false;
        isburgerMenuOpen = !isburgerMenuOpen;
    }

    function scrollToDiv(url: string, id: string) {
        //goTo(url);
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }

    $: authUser = userStore;
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/index.css" />
</svelte:head>

<div class="navbar">
    <div class="title">Maison de Santé Pluriprofessionnelle</div>
    <div class="right-buttons">
        <a href="/" class="navbar-button">Accueil</a
        >
        <a href="/#practitioners"
            class="navbar-button">Les Praticiens</a
        >
        <a href="/#actualités" class="navbar-button"
            >Actualités</a
        >
        <a href="/informations" class="navbar-button"
            >Informations</a
        >
        <a href="/rendez-vous" class="navbar-button"
            >Rendez-vous</a
        >
        {#if $authUser}
            <a href="#top"
                class="navbar-button"
                on:click={() => goTo("/protected/ads")}>Admin</a
            >
            <a href="#top" class="navbar-button" on:click={authHandlers.logOut}
                >Déconnexion</a
            >
        {/if}
    </div>
    {#if isburgerMenuOpen}
        <a href="#top"
            class="burger-menu"
            id="burgerMenu"
            on:click={() => burgerToggle()}
        >
            <div class="burger-menu-first-line-to-open"></div>
            <div class="burger-menu-second-line-to-open"></div>
            <div class="burger-menu-third-line-to-open"></div>
        </a>
    {:else if !isburgerMenuOpen && init}
        <a href="#top"
            class="burger-menu"
            id="burgerMenu"
            on:click={() => burgerToggle()}
        >
            <div class="burger-menu-first-line"></div>
            <div class="burger-menu-second-line"></div>
            <div class="burger-menu-third-line"></div>
        </a>
    {:else if !isburgerMenuOpen && !init}
        <a href="#top"
            class="burger-menu"
            id="burgerMenu"
            on:click={() => burgerToggle()}
        >
            <div class="burger-menu-first-line-to-close"></div>
            <div class="burger-menu-second-line-to-close"></div>
            <div class="burger-menu-third-line-to-close"></div>
        </a>
    {/if}
</div>
{#if isburgerMenuOpen}
    <div class="burger-menu-panel">
        <a href="/" class="burger-menu-button"
            >Accueil</a
        >
        <a href="/#practitioners"
            class="burger-menu-button"
           >Les Praticiens</a
        >
        <a href="/#actualités"
            class="burger-menu-button"
            >Actualités</a
        >
        <a href="/informations" class="burger-menu-button"
        >Informations</a>
        <a href="/rendez-vous" class="burger-menu-button"
            >Rendez-vous</a
        >
        {#if $authUser}
            <a href="#top"
                class="burger-menu-button"
                on:click={() => goTo("/protected/ads")}>Admin</a
            >
            <a href="#top" class="burger-menu-button" on:click={authHandlers.logOut}
                >Déconnexion</a
            >
        {/if}
    </div>
{:else if !isburgerMenuOpen && !init}
    <div class="burger-menu-panel-closing">
        <a href="/" class="burger-menu-button"
            >Accueil</a
        >
        <a href="/#practitioners"
            class="burger-menu-button"
            >Les Praticiens</a
        >
        <a href="/#actualités"
            class="burger-menu-button"
            >Actualités</a
        >
        <a href="/informations"
            class="burger-menu-button"
            >Informations</a
        >
        <a href="/rendez-vous" class="burger-menu-button"
            >Rendez-vous</a
        >
        {#if $authUser}
            <a href="#top"
                class="burger-menu-button"
                on:click={() => goTo("/protected/ads")}>Admin</a
            >
            <a href="#top" class="burger-menu-button" on:click={authHandlers.logOut}
                >Déconnexion</a
            >
        {/if}
    </div>
{/if}
