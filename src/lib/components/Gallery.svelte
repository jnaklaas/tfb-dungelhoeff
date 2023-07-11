<script lang="ts">
  import Img from '@zerodevx/svelte-img';
  import { Player, Vimeo, DefaultControls, DefaultUi } from '@vime/svelte';
  // import * as pkg from '@vime/core';
  // const { defineCustomElements, VmPlayer, VmVimeo, VmDefaultUi, VmDefaultControls } = pkg;
  // defineCustomElements();

  export let images = [];
  export let title = null;
  export let vimeo = null;
</script>

<section class="container-fluid mb-12 md:mb-12 xl:mb-24 {$$props.class ?? ''}">
  {#if title}
  <div class="container">
      <h2 class="col-span-12">{title}</h2>
    </div>
  {/if}
  {#if vimeo}
  <div class="container grid lg:grid-cols-2 gap-6 md:gap-8 xl:gap-12">
    <!-- <vm-player style="--vm-player-border-radius: 0">
      <vm-vimeo 
        byline=false
        videoId={vimeo} 
        cookies=false
      />
      <vm-default-ui noControls>
        <vm-default-controls hideOnMouseLeave activeDuration="{2000}" />
      </vm-default-ui>
    </vm-player> -->
    <Player style="--vm-player-border-radius: 0">
      <Vimeo 
        byline=false
        videoId={vimeo} 
        cookies=false
      />
      <DefaultUi noControls>
        <!-- We setup the default controls and pass in any options. -->
        <DefaultControls hideOnMouseLeave activeDuration="{2000}" />
      </DefaultUi>
    </Player>
  </div>
  {:else}
  <div class="container grid grid-cols-12 gap-6 md:gap-8 xl:gap-12">
  {#each images as image}
      {@const largeImage = image.pop()}

      {#if largeImage}
      <div class="lightbox col-span-4 md:col-span-2">
        <a
        class="block"
        href="{largeImage.src ?? ''}"
        target="_blank"
        rel="noreferrer"
        data-pswp-width={largeImage.width}
        data-pswp-height={largeImage.height}
        >
        <Img src={image} class="w-full aspect-square object-cover"/>
        </a>
      </div>
      {/if}
    {/each}
  </div>
  {/if}
</section>


{#if vimeo}
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css"
/>
{/if}