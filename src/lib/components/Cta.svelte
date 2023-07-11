<script>
  import Button from '$lib/components/Button.svelte';
  export let href = null;
  export let color = null;
</script>

{#if $$slots.default}
<!-- <a href="{cta.link}" class="btn-gold">{@html cta.text}</a> -->
<Button {href} {color} class={$$props.class ?? null} on:click><slot /></Button>
{/if}