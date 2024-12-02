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

    function burgerToggle() {
        init = false;
        isburgerMenuOpen = !isburgerMenuOpen;
    }

    async function scrollToDiv() {
        await goto("/");
        const element = document.getElementById("practitioners");
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    $: authUser = userStore;
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Infirmiers Libéraux</title>
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
        <div class="doctors-container">
            <h1 style="color: #325592;">Infirmiers Libéraux</h1>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white;">Cabinet infirmier du Hameau</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Gaelle Langlet</li>
                        <li>Michele Rota</li>
                        <li>Sylvie Stagnitto</li>
                        <li>Sophie Manguembe</li>
                    </ul>
                </div>
                <div class="images-container">
                    <img class="doctor-image" style="transform: translate(-80%, 5%);" src="images/GaelleLanglet.jpg" alt="Gaelle Langlet"/>
                    <img class="doctor-image" style="transform: translate(-10%, -70%);" src="images/MicheleHodee.jpg" alt="Michele Rota"/>
                    <img class="doctor-image" style="transform: translate(-80%, -150%);" src="images/SylvieStagnitto.jpg" alt="Sylvie Stagnitto"/>
                    <img class="doctor-image" style="transform: translate(-10%, -190%);" src="images/sophieManguembe.jpg" alt="Sophie Manguembe"/>
                </div>
                <div class="doctor-email" style="color: white;">Horaires : Visites à domicile sur rendez-vous de 7h00 à 13h00 puis de 16h00 à 19h00 tous les jours</div>
                <div class="doctor-email" style="color: white;">Dimanche et jours fériés inclus</div>
                <div class="doctor-email" style="color: white;">Permanence de 11h30 à 12h00 du lundi au vendredi</div>
                <div class="doctor-email" style="color: white;">Prise de contact et rendez-vous uniquement par téléphone</div>
                <a class="doctor-phone" href="tel:0559025960" style="color: white;">Téléphone : 05 59 02 59 60</a>
                <div class="doctor-address" style="color: white;">Adresse : 10 rue d'Eauze, 64000 Pau</div>
            </div>



            <div class="doctor-card">
                <div class="doctor-title" style="color: white; font-size: 24px;">Cabinet infirmier</div>
                <div class="doctor-names" style="color: white;">
                    <ul>
                        <li>Lionel Barral</li>
                        <li>Julie Guiard</li>
                    </ul>
                </div>
                <img class="doctor-image" style="transform: translateX(-100px)" src="images/JulieGuiard.jpeg" alt="Julie Guiard"/>
                <img class="doctor-image" style="transform: translate(-40px, -80px);" src="images/LionelBarral.jpg" alt="Lionel Barral"/>
                <div class="doctor-email" style="color: white;">Horaires : Tous les jours de 6h30 à 18h30</div>
                <div class="doctor-email" style="color: white;">Soins à domicile sur rendez-vous uniquement</div>
                <div class="doctor-email" style="color: white;">Contact uniquement par téléphone</div>
                <a class="doctor-phone" href="tel:0665001781" style="color: white;">Téléphone : 06 65 00 17 81</a>
                <div class="doctor-address" style="color: white;">Adresse : 119 avenue du loup, 64000 Pau</div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>