<script lang="ts">
    import { userStore, authHandlers } from "$lib/stores/authStore"
    import { goto } from '$app/navigation';
    import type { PageServerData } from "./$types"
    import { switchArticleStatus } from "$lib/stores/articleStore";
    import type { Article } from "$lib/entities/Article";
    import { createArticle } from "$lib/stores/articleStore";
    
	export let data: PageServerData

    $: articleStatus = false;

    let isburgerMenuOpen = false;
    let init = true;
    let title = '';
    let description = '';
    let image = null;
    let imagePreview = null;

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

    function disableArticle(item: Article) {
        switchArticleStatus(item);
    }

    const handleImageChange = (event) => {
    const file = event.target.files[0];
        if (file) {
        image = file;
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
        } else {
        image = null;
        imagePreview = null;
        }
    };

    $: authUser = userStore
</script>

<html lang="fr">
    <head>
        <style>html{visibility: hidden;opacity:0;}</style>
        <title>MSP | Admin</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="/css/index.css">
        <link rel="preconnect" href="/css/contact.css">
        <link rel="preconnect" href="/css/annonce.css">
        <link rel="preconnect" href="/css/article.css">
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa" rel="stylesheet">
        <link rel="stylesheet" href="/css/contact.css">
        <link rel="stylesheet" href="/css/index.css">
        <link rel="stylesheet" href="/css/annonce.css">
        <link rel="stylesheet" href="/css/article.css">
    </head>
    <body>
        <div class="contact-container">
            <div class="contact-infos">
                <div class="contact-title">Panneau admin</div>
                <p class="contact-text">Publier une annonce:</p>

                <form method="post" enctype="multipart/form-data">
                    <div class="group">
                        <div>
                            <label for="title">Titre de l'article :</label>
                            <input name="title" style="margin-bottom: 20px;" type="text" id="title" bind:value={title} placeholder="Titre de l'annonce" required />
                        </div>
                        <div>
                            <label for="message">Article :</label>
                            <textarea name="description" style="margin-bottom: 20px;" class="textarea-message" id="message" bind:value={description} placeholder="Saisissez ici votre article" required></textarea>
                        </div>
                        <label for="image">Image :</label>
                        <input
                            type="file"
                            id="file"
                            name="fileToUpload"
                            accept=".jpg, .jpeg, .png"
                            on:change={handleImageChange}
                        />
                        {#if imagePreview}
                          <div class="image-preview">
                            <p style="margin-top: 20px; margin-bottom: 20px;">Aperçu :</p>
                            <img src={imagePreview} alt="Aperçu de l'image" />
                          </div>
                        {/if}
                    </div>
                  
                    <button class="submit-button" type="submit">Publier l'article</button>
                  </form>

                <p class="contact-text" style="margin-top: 35px;">Articles publié</p>

                <table style="margin-bottom: 30px; width: 100%;">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {#each data.articles as article}
                        <tr>
                          <td style="text-align: center;">{article.id}</td>
                          <td style="text-align: center;">{article.title}</td>
                          <td style="text-align: center;">{article.enable ? "En ligne" : "Désactivé" }</td>
                          <td class="td-buttons" style="text-align: center;">
                            <button class="admin-button-table" on:click={() => goto("/"+article.id)} style="margin-right: 5%;">Voir</button>
                            <button class="admin-button-table-status" on:click={() => disableArticle(article)}>{ article.enable ? "Désactiver" : "Réactiver"}</button>
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
            </div>
            <div style="height: 15vh"></div>
        </div>
        <div class="footer-text">
            <p style="margin-top: 1vh; margin-bottom: 10px;">© 2025 Copyright Maison de Santé Pluriprofessionnelle du Hameau - <button on:click={() => goto("/mentions-legales")} class="rgpd-button" style="margin-top: 1vh; margin-bottom: 10px;">Mentions légales</button></p>
            <p style="margin-bottom: 1vh;">Créé par Zino-Tech</p>
        </div>
    </body>
</html>