<script lang="ts">
    import { goto } from '$app/navigation';

    let isburgerMenuOpen = false;
    let init = true;
    
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
            <h1 style="color: #325592;">Pharmaciens</h1>
            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Frédéric Pinot et Laurent Couret</div>
                <div class="doctor-title" style="color: white;">Pharmacie de la Paix Aprium</div>
                <img class="doctor-image" style="margin-left: 30%; transform: translateX(-30%);" src="images/FredericPinot.png" alt="Frédéric Pinot"/>
                <img class="doctor-image" style="margin-left: 70%; transform: translateX(-70%);" src="images/LaurentCouret.png" alt="Laurent Couret"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 8h30 à 20h00</li>
                        <li>Samedi de 8h30 à 19h00</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559026647" style="color: white;">Téléphone : 05 59 02 66 47</a>
                <div class="doctor-address" style="color: white;">Adresse : 155 Boulevard de la paix, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://pharmacie-de-la-paix.aprium-pharmacie.fr")}>Site web</button>
            </div>


            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Sophie Maréchal</div>
                <div class="doctor-title" style="color: white;">Pharmacie du centre Berlioz</div>
                <img class="doctor-image" src="images/SophieMarechal.jpg" alt="Sophie Maréchal"/>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Du lundi au vendredi de 8h30 à 12h30 et de 14h00 à 19h30</li>
                        <li>Samedi de 8h30 à 12h30</li>
                    </ul>
                </div>
                <a class="doctor-phone" href="tel:0559026894" style="color: white;">Téléphone : 05 59 02 68 94</a>
                <div class="doctor-address" style="color: white;">Adresse : 38 rue Berlioz, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://pharmacieberlioz-pau.pharmavie.fr")}>Site web</button>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>