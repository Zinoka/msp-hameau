<script lang="ts">
    import { goto } from "$app/navigation";

    let isburgerMenuOpen = false;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }
</script>

<head>
    <title>MSP | Horaires</title>
</head>

<body>
    <div class="rdv-tuto">
        <div class="rdv-tuto-title">Nos horaires</div>
        <div class="category">Médecins de la Maison de Santé</div>
        <div class="rdv-tuto-text">
            <div>
                <p>
                    Les secrétaires vous accueillent pour la prise de
                    rendez-vous ou pour tout renseignement du lundi au vendredi
                    de 8h30 à 12h et de 14h à 18h, le samedi de 8h30 à 11h30.
                </p>
                <p>
                    Consultations : sur rendez-vous du lundi au vendredi de 8h à
                    12h et de 14h à 18h30, et le samedi matin de 8h à 12h.
                </p>
                <p>
                    Urgences : tous les matins de lundi à vendredi, accueil sans
                    rendez-vous de 8h à 11h.
                </p>
            </div>
        </div>
    </div>
    <div class="footer-text">
        <p style="margin-top: 1vh; margin-bottom: 10px;">
            © 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button
                on:click={() => goto("/mentions-legales")}
                class="rgpd-button"
                style="margin-top: 1vh; margin-bottom: 10px;"
                >Mentions légales</button
            >
        </p>
        <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
    </div>
</body>

<style>
    html {
        visibility: hidden;
        opacity: 0;
    }
</style>
