<script>
  import { Carousel } from 'flowbite-svelte';
  export let images = [];
  export let width = "default";

  const containers = {
    container: { element:'Container', class:''},
    full: { element:'div', class:''},
    default: { element:'div', class:'sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24'},
  };
</script>

<section id={$$props.id || null} class="{$$props.class ?? ''} mb-12 md:mb-12 xl:mb-24">
  <svelte:element this={containers[width].element} class={containers[width].class}>
    <Carousel {images} 
    showCaptions={false} showThumbs={false} 
    loop duration={10000}
    divClass="overflow-hidden relative"
    thumbClass="w-full"
    />
  </svelte:element>
</section>

<!-- 
<section class="{$$props.class} mb-8 md:mb-12 xl:mb-24">
  {#if width === "full"}
  <slot/>
  {:else if width === "container"}
  <Container>
    <slot />
  </Container>
  {:else}
  <div class="sm:mx-4 md:mx-8 lg:mx-12 xl:mx-18 2xl:mx-24">
    <slot />
  </div>
  {/if}
  </section> -->

  <style type="postcss">
    :global(#default-carousel img) {
      @apply w-full;
    }
  </style>