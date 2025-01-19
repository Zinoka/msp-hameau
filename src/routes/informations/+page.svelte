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
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Informations</title>
        <link rel="preconnect" href="css/index.css">
        <link rel="preconnect" href="css/contact.css">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="stylesheet" href="css/index.css">
        <link rel="stylesheet" href="css/contact.css">
        <link rel="stylesheet" href="css/rdv.css">
    </head>
    <body>
        <div class="contact-container">
            <div class="contact-infos">
                <div class="contact-title">Nous contacter</div>
                <div class="contact-text" style="margin-bottom: 50px;">
                    <p>Vous pouvez joindre les secrétaires médicales de <strong>8h30 à 18h00</strong> du lundi au vendredi au <a href="tel:0559840002"><strong>05 59 84 00 02</strong></a> pour les Dr Isabelle Ader Casedevant, Dr Fanny Le Guen, Dr Laure Elise Martin</p>
                    <p style="margin-top: 20px;">Au <a href="tel:0559841227"><strong>05 59 84 12 27</strong></a> pour le Dr Pierre Casedevant</p>
                    <p style="margin-top: 20px;">Au <a href="tel:0559026397"><strong>05 59 02 63 97</strong></a> pour le Dr Julie Canton Arino</p>
                    <p style="margin-top: 20px;">Une permanence téléphonique pour les urgences des patients de la maison de santé est assurée par les médecins de <strong>18h00 à 19h00</strong> du lundi au vendredi et de <strong>8h00 à 12h00</strong> le samedi (pas de prise de rendez-vous non urgent)</p>
                    <p>Vous pouvez aussi prendre rendez-vous sur Easydoct</p>
                    <button class="tuto-button" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau")}>Prendre rendez-vous sur Easydoct</button>
                </div>
                <p class="contact-text"><strong>Attention:</strong> Vous souhaitez contacter un praticien para-médical ?</p>
                <p class="contact-text"><strong>Contactez-le directement.</strong></p>
            </div>
            <Map />
            <div style="height: 15vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>