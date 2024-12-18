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
        <title>MSP | Mentions Légales</title>
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
            <div class="rdv-tuto-title">Mentions légales</div>
            <div class="rdv-tuto-sub-title">Éditeur du site</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p style="margin-bottom: 10px;"><strong>Le présent site est édité par :</strong></p>
                    <p>Nom ou Raison sociale : Zino-Tech</p>
                    <p>Adresse : 10 chemin de la gare, 64330 Garlin</p>
                    <p>E-mail : contact@zino-tech.fr</p>
                    <p>Numéro de SIRET : 81083392000010</p>
                    <p>Responsable de publication : [Vos informations]</p>
                </div>
            </div>

            <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Hébergeur</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p style="margin-bottom: 10px;"><strong>Le site est hébergé par :</strong></p>
                    <p>Nom de l'hébergeur : [Vos informations]</p>
                    <p>Adresse de l'hébergeur : [Vos informations]</p>
                    <p>Téléphone : [Vos informations]</p>
                    <p>Site Internet : [Vos informations]</p>
                </div>
            </div>

            <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Propriété intellectuelle</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p>L’ensemble des éléments présents sur ce site (textes, images, logos, vidéos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle. 
                        Toute reproduction, représentation ou distribution, en tout ou partie, des contenus du site est strictement interdite sans l’autorisation préalable de [Vos informations].</p>
                </div>
            </div>

            <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Protection des données personnelles</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p>Conformément au Règlement Général sur la Protection des Données (RGPD), les données personnelles collectées sur ce site sont utilisées uniquement dans le cadre défini (contact, demande d'informations, etc.).</p>
                    <p>Vous disposez d’un droit d’accès, de rectification, et de suppression de vos données. Pour exercer ce droit, veuillez contacter [Vos informations].</p>
                </div>
            </div>

            <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Cookies</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p>Le site utilise des cookies afin d’améliorer l’expérience utilisateur et d’analyser le trafic. Vous pouvez paramétrer ou refuser les cookies via votre navigateur.</p>
                </div>
            </div>

            <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Responsabilité</div>
            <div class="rdv-tuto-text" style="margin-top: 30px;">
                <div class="tuto-text">
                    <p>[Vos informations] s’efforce d’assurer la mise à jour régulière des informations présentes sur ce site. Toutefois, [Vos informations] ne saurait être tenu responsable en cas d’erreur ou d’omission.</p>
                </div>
            </div>
            
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>