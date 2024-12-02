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

    async function scrollToDiv() {
        await goto("/");
        const element = document.getElementById("practitioners");
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    $: authUser = userStore
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Contact</title>
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
                <button class="navbar-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
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
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
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
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
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

                <div class="contact-title">Nos horaires</div>
                <div class="category">Médecins de la Maison de Santé</div>
                <div class="contact-text" style="margin-bottom: 50px;">
                    <div>
                        <p>Les secrétaires vous accueillent pour la prise de rendez-vous ou pour tout renseignement du lundi au vendredi de 8h30 à 12h et de 14h à 18h, le samedi de 8h30 à 11h30.</p>
                        <p>Consultations : sur rendez-vous du lundi au vendredi de 8h à 12h et de 14h à 18h30, et le samedi matin de 8h à 12h.</p>
                        <p>Urgences : tous les matins de lundi à vendredi, accueil sans rendez-vous de 8h à 11h.</p>
                    </div>
                </div>
        
                
                <div class="contact-title">Nous contacter</div>
                <p class="contact-text">Contacter les médecins de la Maison de Santé</p>
                <p class="contact-text">Le secrétariat médical est joignable au <strong><a href="tel:0559840002">05 59 84 00 02</a></strong> selon les modalités suivantes :</p>
                <ul>
                    <li>Lundi de <strong>8h30 à 12h00 et de 14h00 à 19H00</strong></li>
                    <li>Mardi de <strong>8h30 à 12h00 et de 14h00 à 18h30</strong></li>
                    <li>Mercredi de <strong>8h30 à 12h00</strong></li>
                    <li>Jeudi de <strong>8h30 à 12h00</strong></li>
                    <li>Vendredi de <strong>8h30 à 12h00 et 14h00 à 18h30</strong></li>
                </ul>
                <p class="contact-text" style="margin-top: 2vh;">Attention: Vous souhaitez contacter un praticien para-médical ?</p>
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