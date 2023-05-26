<script>
  import Img from '@zerodevx/svelte-img';
	import Container from "./Container.svelte";

  export let images = [];
  export let lightbox = false;

  $: largeImages = images.map((image)=> {
    return image.pop();
  });

  const gridItemClasses = [
    'col-span-6',
    'col-span-6 row-start-2 col-start-1',
    'col-span-6 row-span-2 flex flex-col justify-center'
  ];
</script>

{#if images.length === 3}
<section class="{$$props.class} mb-8 md:mb-12 xl:mb-24">
  <Container class="grid grid-cols-12 gap-4 md:gap-8 xl:gap-12 {lightbox ? 'lightbox' : ''}">
    {#each images as image, i}
      <div class="{gridItemClasses[i]}">
        {#if lightbox && typeof largeImages[i] === 'object'}
          <div class="lightbox">
            <a
              href="{largeImages[i].src ?? ''}"
              target="_blank"
              rel="noreferrer"
              data-pswp-width={largeImages[i].width}
              data-pswp-height={largeImages[i].height}
            >
              <Img src={image} class=w-full/>
            </a>
          </div>
          {:else}
          <Img src={image} class=w-full/>
          {/if}
      </div>
    {/each}
  </Container>
</section>
{/if}