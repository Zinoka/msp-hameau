<script lang="ts">
    import { goto } from '$app/navigation';

    let isburgerMenuOpen = false;
    let init = true;
    
    function goTo(url: string) {
        setTimeout(() => {
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
        <div class="doctors-container">
            <h1 style="color: #325592;">Kinésithérapeutes</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Jonathan Barberet</div>
                <img class="doctor-image" src="images/JonathanBarberet.jpg" alt="Jonathan Barberet"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 9h00 à 19h00</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559274258" style="color: white;">Téléphone : 05 59 27 42 58</a>
                <div class="doctor-address" style="color: white;">Adresse : 125 Boulevard de la Paix, 64000 Pau</div>
            </div>


            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Émilie Cavero</div>
                <img class="doctor-image" src="images/EmilieCavero.jpg" alt="Émilie Cavero"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au jeudi de 8h30 à 18h00</li>
                        <li>Vendredi de 8h30 à 14h00</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559274258" style="color: white;">Téléphone : 05 59 27 42 58</a>
                <div class="doctor-address" style="color: white;">Adresse : 125 Boulevard de la Paix, 64000 Pau</div>
            </div>


            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Virginie Leleu</div>
                <img class="doctor-image" src="images/VirginieLeleu.jpg" alt="Virginie Leleu"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 9h00 à 19h00</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559274258" style="color: white;">Téléphone : 05 59 27 42 58</a>
                <div class="doctor-address" style="color: white;">Adresse : 125 Boulevard de la Paix, 64000 Pau</div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>