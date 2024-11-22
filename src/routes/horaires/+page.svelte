<script lang="ts">
    import { goto } from '$app/navigation';

    let isburgerMenuOpen = false;
    let init = true;
    
    function goTo(url: string) {
        setTimeout(() => {
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

    async function scrollToDiv() {
        await goto("/");
        const element = document.getElementById("practitioners");
        element?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Horaires</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="preconnect" href="css/index.css">
        <link rel="preconnect" href="css/horaires.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/rdv.css">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/horaires.css">
    </head>
    <body>
        <div class="navbar">
            <div class="title">Maison de Santé Pluriprofessionnelle</div>
            <div class="right-buttons">
                <button class="navbar-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="navbar-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="navbar-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="navbar-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="navbar-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
            <button class="burger-menu" id="burgerMenu" on:click={() => burgerToggle()}>
                <div class="burger-menu-first-line"></div>
                <div class="burger-menu-second-line"></div>
                <div class="burger-menu-third-line"></div>
            </button>
        </div>
        {#if isburgerMenuOpen}
            <div class="burger-menu-panel">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="burger-menu-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        {:else if !isburgerMenuOpen && !init}
            <div class="burger-menu-panel-closing">
                <button class="burger-menu-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="burger-menu-button" on:click={() => scrollToDiv()}>Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="burger-menu-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        {/if}
        <div class="rdv-tuto">
            <div class="rdv-tuto-title">Nos horaires</div>
            <div class="category">Médecins de la Maison de Santé</div>
            <div class="rdv-tuto-text">
                <div>
                    <p>Les secrétaires vous accueillent pour la prise de rendez-vous ou pour tout renseignement du lundi au vendredi de 8h30 à 12h et de 14h à 18h, le samedi de 8h30 à 11h30.</p>
                    <p>Consultations : sur rendez-vous du lundi au vendredi de 8h à 12h et de 14h à 18h30, et le samedi matin de 8h à 12h.</p>
                    <p>Urgences : tous les matins de lundi à vendredi, accueil sans rendez-vous de 8h à 11h.</p>
                </div>
            </div>

            <div class="category">Praticiens paramédicaux</div>
            <div class="rdv-tuto-text">
                <div>
                    <div class="title-horaires">Diététicien</div>
                    <p>Julien LACOUE-LABARTHE: du lundi au vendredi.</p>

                    <div class="title-horaires">Infirmières</div>
                    <p>Virginie DELALBRE, Mathilde LEJEUNE & Mélanie PERROY : tous les jours, sur rendez-vous.</p>

                    <div class="title-horaires">Infirmière Asalée</div>
                    <p>Mélanie PERROY : uniquement sur RDV au cabinet ou à domicile ; le mardi et jeudi de 9h à 19h.</p>

                    <div class="title-horaires">Orthophoniste</div>
                    <p>Léa MOLLIÈRE : du lundi au vendredi, 9h-13h & 14h-18h.</p>

                    <div class="title-horaires">Orthoptiste</div>
                    <p>Laure SEBAT : du lundi au vendredi de 9h à 18h.</p>

                    <div class="title-horaires">Ostéopathe</div>
                    <p>Christophe BORÉ-CAVALLERO : du lundi au vendredi.</p>

                    <div class="title-horaires">Pédicure-podologue</div>
                    <p>Hélène FABRE : du lundi au vendredi de 8h30 à 19h.</p>
                </div>
                <div style="height: 15vh"></div>
            </div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>