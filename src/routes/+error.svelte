<script lang="ts">
    import { goto } from "$app/navigation";

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

    function scrollToDiv(id: string) {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<html lang="fr">
    <head>
        <style>
            html {
                visibility: hidden;
                opacity: 0;
            }
        </style>
        <title>MSP | Erreur</title>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="css/index.css" />
        <link rel="preconnect" href="css/rdv.css" />
        <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa"
            rel="stylesheet"
        />
        <link rel="stylesheet" href="css/index.css" />
        <link rel="stylesheet" href="css/rdv.css" />
    </head>
    <body>
        <div class="error-container">
            <h1 class="error-title">Erreur 404</h1>
            <p
                class="error-text
            "
            >
                La page que vous cherchez n'existe pas...
            </p>
            <button class="tuto-button" on:click={() => goTo("/")}
                >Retour à l'accueil</button
            >
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">
                © 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau
                - <button
                    on:click={() => goto("/mentions-legales")}
                    class="rgpd-button"
                    style="margin-top: 1vh; margin-bottom: 10px;"
                    >Mentions légales</button
                >
            </p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>
