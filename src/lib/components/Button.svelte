<script>
  import { Button } from 'flowbite-svelte';

  export let href;
  export let color = "white";

  const colorVariants = {
    white: 'text-white bg-transparent ring-white hover:text-coolgray hover:ring-coolgray hover:bg-transparent lowercase',
    primary: 'text-primary bg-transparent ring-primary hover:text-white hover:bg-primary lowercase',
  }
</script>
<Button {href} on:click type={$$props.type ?? 'button'} class="{$$props.class} {colorVariants[color]} ring-1 !py-1.5 !text-sm !font-semibold rounded-sm mt-3"><slot /></Button>
