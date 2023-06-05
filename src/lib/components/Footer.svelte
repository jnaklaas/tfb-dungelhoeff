<script>
  import logoTFB from '$lib/images/another-tfb-brand.svg';
	import { getContext } from 'svelte';
	import Container from './Container.svelte';

  const headerMx = getContext('headerMx') || 'sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 2xl:mx-24';
</script>

<footer class="color-scheme-dark mt-auto text-sm lg:text-xs py-base">
    <!-- <div class="my-6 md:my-6 lg:container grid grid-cols-4"> -->
    <Container grid>
      <div class="md:col-span-8 2xl:col-span-6 2xl:col-start-2">
        <span class="pr-8">
          <slot name=address />
        </span>
        <br class="lg:hidden">
        <span>
          <slot name=developer />
        </span>
      </div>
      <div class="col-span-4 2xl:col-end-12 flex md:justify-end">
        <a class="" href="https://www.tricksforbricks.be" target="_blank" rel="noopener">
          <img class="h-[0.6rem] mt-1" src="{logoTFB}" alt="Tricks For Bricks">
        </a>
      </div>
    </Container>
</footer>