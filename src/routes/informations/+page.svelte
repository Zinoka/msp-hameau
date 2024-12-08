<script lang="ts">
    import { goto } from '$app/navigation';
    import Map from "$lib/Map.svelte";
    import { authHandlers, userStore } from "$lib/stores/authStore";

    let isburgerMenuOpen = false;
    let init = true;
    
    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, 0);
    }

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

    async function scrollToDiv(name: string) {
        await goto("/");
        const element = document.getElementById(name);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    $: authUser = userStore
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Informations</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/index.css">
        <link rel="preconnect" href="css/contact.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/contact.css">
    </head>
    <body>
        <div class="navbar">
            <div class="title">Maison de Santé Pluriprofessionnelle</div>
            <div class="right-buttons">
                <button class="navbar-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="navbar-button" on:click={() => scrollToDiv("practitioners")}>Les Praticiens</button>
                <button class="navbar-button" on:click={() => scrollToDiv("actualités")}>Actualités</button>
                <button class="navbar-button" on:click={() => goTo("/informations")}>Informations</button>
                <button class="navbar-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
                {#if $authUser}
                    <button class="navbar-button" on:click={() => goTo("/protected/ads")}>Admin</button>
                    <button class="navbar-button" on:click={authHandlers.logOut}>Déconnexion</button>
                {/if}
            </div>
            {#if isburgerMenuOpen}
                <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                    <div class="burger-menu-first-line-to-open"></div>
                    <div class="burger-menu-second-line-to-open"></div>
                    <div class="burger-menu-third-line-to-open"></div>
                </button>
            {:else if !isburgerMenuOpen && init}
                <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                    <div class="burger-menu-first-line"></div>
                    <div class="burger-menu-second-line"></div>
                    <div class="burger-menu-third-line"></div>
                </button>
            {:else if !isburgerMenuOpen && !init}
                <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                    <div class="burger-menu-first-line-to-close"></div>
                    <div class="burger-menu-second-line-to-close"></div>
                    <div class="burger-menu-third-line-to-close"></div>
                </button>
            {/if}
        </div>
        {#if isburgerMenuOpen}
            <div class="burger-menu-panel">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv("practitioners")}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv("actualités")}>Actualités</button>
                <button class="burger-menu-button" on:click={() => goTo("/informations")}>Informations</button>
                
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
                {#if $authUser}
                    <button class="burger-menu-button" on:click={() => goTo("/protected/ads")}>Admin</button>
                    <button class="burger-menu-button" on:click={authHandlers.logOut}>Déconnexion</button>
                {/if}
            </div>
        {:else if !isburgerMenuOpen && !init}
            <div class="burger-menu-panel-closing">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv("practitioners")}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv("actualités")}>Actualités</button>
                <button class="burger-menu-button" on:click={() => goTo("/informations")}>Informations</button>
                
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
                {#if $authUser}
                    <button class="burger-menu-button" on:click={() => goTo("/protected/ads")}>Admin</button>
                    <button class="burger-menu-button" on:click={authHandlers.logOut}>Déconnexion</button>
                {/if}
            </div>
        {/if}
        <div class="contact-container">
            <div class="contact-infos">
                <div class="contact-title">Nous contacter</div>
                <div class="contact-text" style="margin-bottom: 50px;">
                    <p>La Maison de Santé Pluriprofessionnelle est ouverte tous les jours de <strong>8h30 à 19h00</strong></p>
                    <p style="margin-top: 30px; margin-bottom: 20px;">Accueil téléphonique au <strong><a href="tel:0559840002">05 59 84 00 02</a></strong></p>
                    <ul>
                        <li style="margin-bottom: 10px;">Du lundi au vendredi de <strong>8h30 à 19h00</strong></li>
                        <li>Le samedi de <strong>8h00 à 12h00</strong> (sur rendez-vous pris le jour même)</li>
                    </ul>
                </div>
                <p class="contact-text"><strong>Attention:</strong> Vous souhaitez contacter un praticien para-médical ?</p>
                <p class="contact-text"><strong>Contactez-le directement.</strong></p>
            </div>
            <Map />
            <div style="height: 15vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>