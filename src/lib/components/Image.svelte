<script>
	import Container from "./Container.svelte";
  import Img from '@zerodevx/svelte-img';
  
  export let src;
  export let width;
</script>

<section class="mb-12 md:mb-12 xl:mb-24">
{#if width === "full"}
<Img {src} class="{$$props.class} w-full"/>
{:else if width === "container"}
<Container>
  <Img {src} class=w-full/>
</Container>
{:else}
<div class="sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24">
  <Img {src} class=w-full/>
</div>
{/if}
</section>