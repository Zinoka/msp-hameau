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
    <title>MSP | Mentions Légales</title>
</head>

<body>
    <div class="rdv-tuto">
        <div class="rdv-tuto-title">Mentions légales</div>
        <div class="rdv-tuto-sub-title">Éditeur du site</div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p style="margin-bottom: 10px;">
                    <strong>Le présent site est édité par :</strong>
                </p>
                <p>Nom ou Raison sociale : Zino-Tech</p>
                <p>Adresse : 10 chemin de la gare, 64330 Garlin</p>
                <p>E-mail : contact@zino-tech.fr</p>
                <p>Numéro de SIRET : 81083392000010</p>
                <p>Responsable de publication : [Vos informations]</p>
            </div>
        </div>

        <div class="rdv-tuto-sub-title" style="margin-top: 30px;">
            Hébergeur
        </div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p style="margin-bottom: 10px;">
                    <strong>Le site est hébergé par :</strong>
                </p>
                <p>Nom de l'hébergeur : [Vos informations]</p>
                <p>Adresse de l'hébergeur : [Vos informations]</p>
                <p>Téléphone : [Vos informations]</p>
                <p>Site Internet : [Vos informations]</p>
            </div>
        </div>

        <div class="rdv-tuto-sub-title" style="margin-top: 30px;">
            Propriété intellectuelle
        </div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p>
                    L’ensemble des éléments présents sur ce site (textes,
                    images, logos, vidéos, etc.) est protégé par les lois en
                    vigueur sur la propriété intellectuelle. Toute reproduction,
                    représentation ou distribution, en tout ou partie, des
                    contenus du site est strictement interdite sans
                    l’autorisation préalable de [Vos informations].
                </p>
            </div>
        </div>

        <div class="rdv-tuto-sub-title" style="margin-top: 30px;">
            Protection des données personnelles
        </div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p>
                    Conformément au Règlement Général sur la Protection des
                    Données (RGPD), les données personnelles collectées sur ce
                    site sont utilisées uniquement dans le cadre défini
                    (contact, demande d'informations, etc.).
                </p>
                <p>
                    Vous disposez d’un droit d’accès, de rectification, et de
                    suppression de vos données. Pour exercer ce droit, veuillez
                    contacter [Vos informations].
                </p>
            </div>
        </div>

        <div class="rdv-tuto-sub-title" style="margin-top: 30px;">Cookies</div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p>
                    Le site utilise des cookies afin d’améliorer l’expérience
                    utilisateur et d’analyser le trafic. Vous pouvez paramétrer
                    ou refuser les cookies via votre navigateur.
                </p>
            </div>
        </div>

        <div class="rdv-tuto-sub-title" style="margin-top: 30px;">
            Responsabilité
        </div>
        <div class="rdv-tuto-text" style="margin-top: 30px;">
            <div class="tuto-text">
                <p>
                    [Vos informations] s’efforce d’assurer la mise à jour
                    régulière des informations présentes sur ce site. Toutefois,
                    [Vos informations] ne saurait être tenu responsable en cas
                    d’erreur ou d’omission.
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
