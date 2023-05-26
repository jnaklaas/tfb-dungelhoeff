<script>
  import logoTFB from '$lib/images/another-tfb-brand.svg';
</script>

<footer class="bg-black text-white self-end text-sm lg:text-xs">
  <div class="mx-4 md:mx-24">
    <div class="my-4 md:my-4 lg:container grid grid-cols-4">
      <div class="col-span-6">
        <span class="pr-8">
          <slot name=address />
        </span>
        <br class="lg:hidden">
        <span>
          <slot name=developer />
        </span>
      </div>
      <div class="col-end-8 align-middle pt-1">
        <a class=" align-middle " href="https://www.tricksforbricks.be" target="_blank" rel="noopener">
          <img class="h-[0.6rem] text-right" src="{logoTFB}" alt="Tricks For Bricks">
        </a>
      </div>
    </div>
  </div>
</footer>