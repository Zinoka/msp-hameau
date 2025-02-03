<script lang="ts">
    import { goto } from "$app/navigation";

    let isburgerMenuOpen = false;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function openExternalLink(url: string) {
        setTimeout(() => {
            window.open(url, "_blank");
        }, 0);
    }
</script>

<svelte:head>
    <title>MSP | Rendez-vous</title>
</svelte:head>

<body>
    <div class="rdv-tuto">
        <div class="rdv-tuto-title">Rendez-vous</div>
        <div class="rdv-tuto-sub-title">Avec un médecin</div>
        <div class="rdv-tuto-text">
            <div class="tuto-text">
                <p>
                    Vous pouvez joindre les secrétaires médicales de <strong
                        >8h30 à 18h00</strong
                    >
                    du lundi au vendredi au
                    <a href="tel:0559840002"><strong>05 59 84 00 02</strong></a>
                    pour les Dr Isabelle Ader Casedevant, Dr Fanny Le Guen, Dr Laure
                    Elise Martin.
                </p>
                <p style="margin-top: 20px;">
                    Au <a href="tel:0559841227"
                        ><strong>05 59 84 12 27</strong></a
                    > pour le Dr Pierre Casedevant.
                </p>
                <p style="margin-top: 20px;">
                    Au <a href="tel:0559026397"
                        ><strong>05 59 02 63 97</strong></a
                    > pour le Dr Julie Canton Arino.
                </p>
                <p style="margin-top: 20px;">
                    Une permanence téléphonique pour les urgences des patients
                    de la maison de santé est assurée par les médecins de <strong
                        >18h00 à 19h00</strong
                    >
                    du lundi au vendredi et de <strong>8h00 à 12h00</strong> le samedi
                    (pas de prise de rendez-vous non urgent)
                </p>
                <p>Vous pouvez aussi prendre rendez-vous sur Easydoct.</p>
                <button
                    class="tuto-button"
                    on:click={() =>
                        openExternalLink(
                            "https://www.easydoct.com/rdv/msp-du-hameau-pau",
                        )}>Prendre rendez-vous sur Easydoct</button
                >
            </div>
        </div>

        <div class="emergency">
            <div class="emergency-title">En cas d'urgence</div>
            <div class="emergency-text">
                <p>
                    En cas d'urgence, la nuit ou le week-end, composez le <a
                        href="tel:15"
                        style="color: white;">15</a
                    >.
                </p>
            </div>
        </div>
        <div style="height: 10vh"></div>
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
