<script lang="ts">
    import { goto } from '$app/navigation';

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

    async function scrollToDiv() {
        await goto("/");
        const element = document.getElementById("practitioners");
        element?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Rendez-vous</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="css/rdv.css">
        <link rel="preconnect" href="css/index.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="css/rdv.css">
        <link rel="stylesheet" href="css/index.css">
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
        <div class="rdv-tuto">
            <div class="rdv-tuto-title">Rendez-vous</div>
            <div class="rdv-tuto-sub-title">Avec un médecin</div>
            <div class="rdv-tuto-text">
                <div class="tuto-text">
                    <p>Vous pouvez joindre le secrétariat de la maison de santé au <a href="tel:0559840002">05 59 84 00 02</a> pendant les heures d'ouverture qui sont les suivantes :</p>
                    <ul>
                        <li>de 8h30 à 12h00 et de 14h00 à 18h00 du lundi au vendredi</li>
                        <li>de 8h30 à 11h30 le samedi matin</li>
                    </ul>
                    <p>Vous pouvez aussi prendre rendez-vous sur Easydoct</p>
                    <button class="tuto-button" on:click={() => openExternalLink("https://www.easydoct.com/rdv/msp-du-hameau-pau")}>Prendre rendez-vous sur Easydoct</button>
                </div>
            </div>

            <div class="rdv-tuto-sub-title">Avec un praticien paramédical</div>
            <div class="rdv-tuto-text">
                <div class="tuto-text-doctors">
                    <p>Diététicien</p>
                    <p class="tuto-text-name">Julien LACOUE-LABARTHE : du lundi au vendredi.</p>

                    <p>Infirmières</p>
                    <p class="tuto-text-name">Virginie DELALBRE, Mathilde LEJEUNE & Mélanie PERROY : tous les jours, sur rendez-vous.</p>

                    <p>Infirmières Asalée</p>
                    <p class="tuto-text-name">Mélanie PERROY : uniquement sur rendez-vous au cabinet ou à domicile; le mardi et jeudi de 9h00 à 19h00.</p>

                    <p>Orthophoniste</p>
                    <p class="tuto-text-name">Léa MOLLIERE : du lundi au vendredi de 9h00 à 13h00 et de 14h00 à 18h00.</p>

                    <p>Orthoptiste</p>
                    <p class="tuto-text-name">Laure SEBAT : du lundi au vendredi de 9h00 à 18h00.</p>

                    <p>Ostéopathe</p>
                    <p class="tuto-text-name">Christophe BORÉ-CAVALLERO : du lundi au vendredi.</p>

                    <p>Pédicure-podologue</p>
                    <p class="tuto-text-name">Hélène FABRE : du lundi au vendredi de 8h30 à 19h00.</p>
                </div>
            </div>

            <div class="emergency">
                <div class="emergency-title">En cas d'urgence</div>
                <div class="emergency-text">
                    <p>Le soir, la nuit et le week-end, vous pouvez appeler le <a href="tel:166177" style="color: white;">116117</a> pour joindre le médecin d'astreinte.</p>
                    <p>En cas d'urgence en journée, la nuit ou le week-end, composez le <a href="tel:15" style="color: white;">15</a>.</p>
                </div>
            </div>
            <div style="height: 10vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2024 Copyright Maison de Santé Pluriprofessionnelle du Hameau</p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>