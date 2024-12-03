<script>
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';
  
    let showBanner = false;
  
    onMount(() => {
      if (!Cookies.get('cookie_preferences')) {
        showBanner = true;
      }
    });
  
    function acceptAll() {
      Cookies.set(
        'cookie_preferences',
        JSON.stringify({ essential: true, analytics: true, marketing: true }),
        { expires: 365 }
      );
      showBanner = false;
    }
  </script>

<svelte:head>
    <link rel="stylesheet" href="/css/cookie-banner.css">
</svelte:head>
  
{#if showBanner}
    <div class="cookie-banner">
        <p>Nous utilisons des cookies pour améliorer votre expérience.</p>
        <div class="cookie-buttons">
            <button on:click={acceptAll}>Accepter tout</button>
            <button on:click={() => (showBanner = false)}>Refuser</button>
        </div>
    </div>
{/if}
  