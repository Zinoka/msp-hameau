<script lang="ts">
    import { goto } from '$app/navigation';
    import Map from "$lib/Map.svelte";

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
        <div class="contact-container">
            <div class="contact-infos">
                <div class="contact-title">Nous contacter</div>
                <p class="contact-text">Contacter les médecins de la Maison de Santé</p>
                <p class="contact-text">Le secrétariat médical est joignable au <strong><a href="tel:0562920466">05 62 92 04 66</a></strong> selon les modalités suivantes :</p>
                <ul>
                    <li>de <strong>8h30 à 12h00 et de 14h00 à 18H00</strong> du lundi au vendredi</li>
                    <li>de <strong>8h30 à 11h30</strong> le samedi matin</li>
                </ul>
                <p class="contact-text" style="margin-top: 2vh;">Attention: Vous souhaitez contacter un praticien para-médical ?</p>
                <p class="contact-text"><strong>Contactez-le directement par téléphone.</strong></p>
                <p class="contact-text">En cas <strong>d'urgence</strong> ou résultat INR, vous pouvez contacter en semaine de <strong>12h00 à 14h00 et de 18h00 à 20h00</strong> un médecin au cabinet au numéro suivant: <a href="tel:0642043066">06 42 04 30 66</a></p>
                <p class="contact-text">En dehors de ces horaires d'ouverture, la Maison de Santé est joignable aux mêmes numéros et renvoie vers le numéro d'urgence (<strong><a href="tel:15">15</a></strong>) ou d'organisation de la permanence des soins (<strong><a href="tel:166177">166177</a></strong>)</p>
                <p class="contact-text">Des informations vous seront communiquées pour vous orienter immédiatement vers les solutions les plus adaptées au regard de votre état de santé.</p>
            </div>
            <Map />
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