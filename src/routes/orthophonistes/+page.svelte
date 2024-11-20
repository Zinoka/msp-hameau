<script lang="ts">
    import { goto } from '$app/navigation';

    let isburgerMenuOpen = false;
    
    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, '_blank');
        }, 0);
    }

    function goTo(url: string) {
        setTimeout(() => {
            goto(url);
        }, 0);
    }

    function burgerToggle() {
        isburgerMenuOpen = !isburgerMenuOpen;
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>Page</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/doctors.css">
    </head>
    <body>
        <div class="navbar">
            <div class="title">Maison de Santé Pluriprofessionnelle</div>
            <div class="right-buttons">
                <button class="navbar-button" on:click={() => goTo("/")}>Accueil</button>
                <button class="navbar-button">Les Praticiens</button>
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
                <button class="burger-menu-button">Les Praticiens</button>
                <button class="burger-menu-button" on:click={() => goTo("/contact")}>Contact</button>
                <button class="burger-menu-button" on:click={() => goTo("/horaires")}>Horaires</button>
                <button class="burger-menu-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
            </div>
        {/if}
        <div class="doctors-container">
            <h1 style="color: #325592;">Orthophonistes</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Rémi Martel</div>
                <img class="doctor-image" src="images/RemiMartel.jpg" alt="Rémi Martel"/>

                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Mercredi 8h30-18h30</li>
                        <li>jeudi 8h30-18h30</li>
                        <li>vendredi 8h30-18h30</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0986571800" style="color: white;">Téléphone : 09 86 57 18 00</a>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://perfactive.fr/list/remi-martel")}>Prendre rendez-vous</button>
            </div>
        </div>
        <div class="footer-buttons">
            <button class="footer-button" on:click={() => goTo("/")}>Accueil</button>
            <button class="footer-button">Les Praticiens</button>
            <button class="footer-button" on:click={() => goTo("/contact")}>Contact</button>
            <button class="footer-button" on:click={() => goTo("/mentions-legales")}>Mentions Légales</button>
            <button class="footer-button" on:click={() => goTo("/horaires")}>Horaires</button>
            <button class="footer-button" on:click={() => goTo("/rendez-vous")}>Rendez-vous</button>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 1.5vh;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>