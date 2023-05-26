<script>
  // import HeroImg from '$lib/images/hero.jpg?run';
  import Img from '@zerodevx/svelte-img';
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
  <div class="sm:mx-4 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24">
    <Img src={HeroImg} class="heroImg w-full"/>
  </div>

  {#if $$slots.default || $$slots.notification}
  <div class="lg:-mt-24 xl:-mt-36 sm:mx-4 md:mx-8 lg:mx-20 xl:mx-24 2xl:mx-32">

    <!-- Hero content -->
    {#if $$slots.default}
    <div class="lg:container relative lg:grid lg:grid-cols-12 gap-0">
        <div class="p-4 md:p-8 xl:p-12 col-span-8 col-start-5 bg-primary">
          <slot />
        </div>
    </div>
    {/if}

    <!-- Hero notification -->
    {#if $$slots.notification}
    <div class="sm:mt-4 lg:container relative lg:grid lg:grid-cols-12 gap-0">
        <div class="p-4 md:px-8 xl:px-12 xl:py-8 col-span-8 col-start-5 bg-black text-white">
          <slot name=notification />
        </div>
    </div>
    {/if}

  </div>
  {/if}

</header>
{/if}

<style lang="postcss">  
@media screen(md) {
  :global(.heroImg) {
    object-fit: cover;
    max-height: 60vw;
    height: calc(100vh - 8rem);
  }
}

@media screen(xl) {
  :global(.heroImg) {
    height: calc(100vh - 10.5rem);
  }
}

@media screen(2xl) {
  :global(.heroImg) {
    height: calc(100vh - 16rem);
  }
}
</style>