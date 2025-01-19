<script lang="ts">
    import { goto } from '$app/navigation';
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

    async function scrollToDiv(name: string) {
        await goto("/");
        const element = document.getElementById(name);
        element?.scrollIntoView({ behavior: 'smooth' });
    }

    $: authUser = userStore;
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Orthophonistes</title>
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
                <div class="doctor-address" style="color: white;">Adresse : 38 rue Berlioz, 64000 Pau</div>
                <button class="doctor-rdv" style="color: #325592;" on:click={() => openExternalLink("https://perfactive.fr/list/remi-martel")}>Prendre rendez-vous</button>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>