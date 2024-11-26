<script lang="ts">
	import type { PageServerData } from "./$types"

	export let data: PageServerData

</script>

<span>{ data.article.title }</span>
