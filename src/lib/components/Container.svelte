<script>
  export let grid = false;
</script>

<div class="mx-4 md:mx-8 lg:mx-20 xl:mx-24 2xl:mx-32">
  <div class="lg:container {$$props.class ?? ''}  {grid ? 'md:grid md:grid-cols-12 gap-4 md:gap-8 xl:gap-12' : ''}">
    <slot/>
  </div>
</div>