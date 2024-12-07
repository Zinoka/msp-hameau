<script lang="ts">
    import { goto } from '$app/navigation';
    import type { PageServerData } from "./$types"
    import { authHandlers, userStore } from "$lib/stores/authStore";

	export let data: PageServerData

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

    function scrollToDiv(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    function cutText(text: string) {
        text = text.replace(/\\n/g, '\n');

        if (text.length > 100) {
            return text.slice(0, 300) + "...";
        }
        

        return text;
    }

    function formatDate(date: string) {
        const dateObj = new Date(date);
        const options: any = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('fr-FR', options).format(dateObj);
    }

    $: authUser = userStore
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Accueil</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
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
        <div class="slogan-container">
            <img class="logo" src="images/logo.png" alt="logo de la maison de santé pluriprofessionnelle du Hameau">
            <div class="slogan">La Maison de Santé, une autre façon de travailler ensemble !</div>
        </div>
        <div class="welcome-panel">
            <h1>Bienvenue !</h1>
            <div class="welcome-text">
                <p>Notre maison de santé du Hameau est <strong>multisite</strong>, c'est à dire qu'elle est divisée en <strong>7 lieux</strong> dans le quartier du Hameau à Pau (Ousse des Bois et Berlioz)</p>
                <p style="margin-top: 30px;">Nous sommes une équipe de <strong>19</strong> professionnels</p>
                <ul style="margin-top: 30px; margin-left: 20px;" id="practitioners">
                    <li>Médecins généralistes</li>
                    <li>Pharmaciens</li>
                    <li>Orthophonistes</li>
                    <li>Kinésithérapeutes</li>
                    <li>Infirmiers libéraux</li>
                    <li>Infirmiers Asalée</li>
            </div>
            <div class="welcome-image">
                <img src="images/doctors.png" alt="docteurs msp hameau">
            </div>
        </div>
        <div class="line"></div>
        <div class="practitioners-panel">
            <h1>Les Praticiens</h1>
            <div class="practitioners-buttons-panel">
                <button class="practitioner-button" on:click={() => goTo("/medecins-generalistes")}>
                    <span style="position: relative;">Médecins Généralistes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/pharmaciens")}>
                    <span style="position: relative;">Pharmaciens</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/orthophonistes")}>
                    <span style="position: relative;">Orthophonistes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/kinesitherapeutes")}>
                    <span style="position: relative;">Kinésithérapeutes</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/infirmiere-asalee")}>
                    <span style="position: relative;">Infirmière Asalée</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
                <button class="practitioner-button" on:click={() => goTo("/infirmier-liberaux")}>
                    <span style="position: relative;">Infirmiers Libéraux</span>
                    <img class="arrow-right" src="images/right-arrow.svg" alt="right arrow">
                </button>
            </div>
        </div>
        <div class="news-panel" id="actualités">
            <h1>Les Nouvelles Actualités</h1>
            <div class="news-cards-panel" style="margin-bottom: 20px;">
                {#if data.articles.length === 0}
                    <p style="margin-bottom: 50px;">Il n'y a pas d'actualités pour le moment</p>
                {/if}
                {#each data.articles as article}
                    {#if article.enable}
                        <button class="news-card" on:click={() => goto(article.id)}>
                            {#if article.imageName}
                                <img src="uploads/{ article.imageName }" alt="{ article.title }">
                            {:else}
                                <img src="images/logo.png" alt="Logo par defaut MSP">
                            {/if}
                            <div class="news-text">
                                <h2>{ article.title }</h2>
                                <span>Publié le { formatDate(article.created_at) }</span>
                                <p>{ cutText(article.description) }</p>
                            </div>
                        </button>
                    {/if}
                {/each}
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>