<script>
	import { getContext } from "svelte";

  export let grid = false;
  export let snapXs = false;
</script>

<div class="{ snapXs ? 'sm:container-fluid' : 'container-fluid' }">
  <div class="lg:container {$$props.class ?? ''}  {grid ? 'md:grid md:grid-cols-12 gap-6 md:gap-8 xl:gap-12' : ''}">
    <slot/>
  </div>
</div>