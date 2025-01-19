<script lang="ts">
    import { goto } from '$app/navigation';
    import { authHandlers, userStore } from '$lib/stores/authStore';

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

        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>