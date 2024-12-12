<script lang="ts">
    import { goto } from '$app/navigation';
    import { authHandlers, userStore } from "$lib/stores/authStore";
    
    let isburgerMenuOpen = false;
    let init = true;
    
    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, '_blank');
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
        <title>MSP | Rendez-vous</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="preconnect" href="css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/rdv.css">
        <link rel="stylesheet" href="css/index.css">
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
        <div class="rdv-tuto">
            <div class="rdv-tuto-title">Rendez-vous</div>
            <div class="rdv-tuto-sub-title">Avec un médecin</div>
            <div class="rdv-tuto-text">
                <div class="tuto-text">
                    <p>Vous pouvez joindre les secrétaires médicales de <strong>8h30 à 18h00</strong> du lundi au vendredi au <a href="tel:0559840002"><strong>05 59 84 00 02</strong></a> pour les Dr Isabelle Ader Casedevant, Dr Fanny Le Guen, Dr Laure Elise Martin</p>
                    <p style="margin-top: 20px;">Au <a href="tel:0559841227"><strong>05 59 84 12 27</strong></a> pour le Dr Pierre Casedevant</p>
                    <p style="margin-top: 20px;">Au <a href="tel:0559026397"><strong>05 59 02 63 97</strong></a> pour le Dr Julie Canton Arino</p>
                    <p style="margin-top: 20px;">Une permanence téléphonique pour les urgences des patients de la maison de santé est assurée par les médecins de <strong>18h00 à 19h00</strong> du lundi au vendredi et de <strong>8h00 à 12h00</strong> le samedi (pas de prise de rendez-vous non urgent)</p>
                    <p>Vous pouvez aussi prendre rendez-vous sur Easydoct</p>
                    <button class="tuto-button" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau")}>Prendre rendez-vous sur Easydoct</button>
                </div>
            </div>

            <div class="emergency">
                <div class="emergency-title">En cas d'urgence</div>
                <div class="emergency-text">
                    <p>En cas d'urgence, la nuit ou le week-end, composez le <a href="tel:15" style="color: white;">15</a>.</p>
                </div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>