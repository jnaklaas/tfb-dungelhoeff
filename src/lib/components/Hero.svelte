<script>
  import Img from '@zerodevx/svelte-img';
	import { getContext } from 'svelte';

  export let HeroImg = null;
</script>

<!--
  @component
  Hero component with props `HeroImg`.
  Usage:
  - JS:
  ```js
  import Hero from '../lib/components/Hero.svelte';
  import HeroImg from '../lib/images/hero.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  ```
  - Svelte:
  ```html
  <Hero {HeroImg}/>
  <Hero {HeroImg}>
    <h1>You want to live here</h1><p>This text explains you why</p>
    <svelte:fragment slot=notification><p>Sales launching soon</p></svelte:fragment>
  </Hero>
  ```
-->

{#if HeroImg}
<header id="{$$props.id || null}" class="hero mb-12 md:mb-12 xl:mb-24 ">
  <!-- Hero image -->
  <!-- <div class="sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24"> -->
  <div class="sm:container-fluid-wide">
    <Img
      src={HeroImg}
      class="hero-img w-full"
    />
  </div>

  {#if $$slots.default || $$slots.notification}
  <div class="lg:-mt-24 xl:-mt-36 sm:container-fluid">

    <!-- Hero content -->
    {#if $$slots.default}
    <div class="lg:container relative lg:grid lg:grid-cols-12 gap-0">
        <div class="p-base col-span-8 col-start-5 color-scheme-primary">
          <slot />
        </div>
    </div>
    {/if}

    <!-- Hero notification -->
    {#if $$slots.notification}
    <div class="sm:mt-6 lg:container relative lg:grid lg:grid-cols-12 gap-0">
        <div class="p-base col-span-8 col-start-5 color-scheme-dark">
          <slot name=notification />
        </div>
    </div>
    {/if}

  </div>
  {/if}

</header>
{/if}