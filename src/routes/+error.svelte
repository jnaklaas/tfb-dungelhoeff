<script>
  import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
  <h1>Er liep iets fout, onze excuses hiervoor.</h1>
  {#if $page?.error}
    <div class="text-xs lg:text-sm">
      {#if $page?.status}
          <p><b>Paginastatus</b>: {$page?.status}</p>
      {/if}
      {#if $page?.error?.message}
          <p><b>Foutmelding</b>: {$page?.error?.message}</p>
      {/if}
    </div>
  {/if}
</Container>