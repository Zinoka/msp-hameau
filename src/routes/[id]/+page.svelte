<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageServerData } from "./$types";
    export let data: PageServerData;

    if (data.article) {
        if (data.article?.description) {
            data.article.description = data.article.description.replace(
                /\\n/g,
                "\n",
            );
        }
    } else {
        data.article = undefined;
    }

    let isburgerMenuOpen = false;

    function goTo(url: string) {
        setTimeout(() => {
            isburgerMenuOpen = false;
            goto(url);
        }, 0);
    }

    function formatDate(date: string) {
        const dateObj = new Date(date);
        const options: any = { day: "numeric", month: "long", year: "numeric" };
        return new Intl.DateTimeFormat("fr-FR", options).format(dateObj);
    }
</script>

<head>
    <title>MSP | Article {data.article ? data.article.id : -1}</title>
</head>

<body>
    <div class="rdv-tuto">
        <div class="rdv-tuto-title">
            {data.article ? data.article.title : "Article non trouvé"}
        </div>
        {#if data.article?.imageName}
            <img
                src="uploads/{data.article.imageName}"
                alt={data.article ? data.article.title : "Article non trouvé"}
            />
        {:else}
            <img src="images/logo.png" alt="Logo par defaut MSP" />
        {/if}
        <div class="rdv-tuto-sub-title">
            Publié le {formatDate(
                data.article ? data.article.created_at : "1970-01-01",
            )}
        </div>
        <div class="rdv-tuto-text">
            <div class="tuto-text">
                <p style="white-space: pre-wrap;">
                    {data.article?.description ? data.article.description : -1}
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
