<script>
    import { onMount } from 'svelte';
    import Cookies from 'js-cookie';
  
    let essential = true;
    let analytics = false;
    let marketing = false;
  
    function savePreferences() {
      Cookies.set('cookie_preferences', JSON.stringify({ essential, analytics, marketing }), { expires: 365 });
      alert('Préférences sauvegardées !');
    }
  
    onMount(() => {
      const preferences = Cookies.get('cookie_preferences');
      if (preferences) {
        const parsed = JSON.parse(preferences);
        essential = parsed.essential;
        analytics = parsed.analytics;
        marketing = parsed.marketing;
      }
    });
  </script>
  
  <div>
    <h2>Gestion des cookies</h2>
    <form on:submit|preventDefault={savePreferences}>
      <label>
        <input type="checkbox" bind:checked={essential} disabled />
        Cookies essentiels (obligatoires)
      </label>
      <label>
        <input type="checkbox" bind:checked={analytics} />
        Cookies analytiques
      </label>
      <label>
        <input type="checkbox" bind:checked={marketing} />
        Cookies marketing
      </label>
      <button type="submit">Sauvegarder</button>
    </form>
  </div>
  