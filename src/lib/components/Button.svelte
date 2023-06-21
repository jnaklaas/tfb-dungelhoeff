<script>
  import { Button } from 'flowbite-svelte';

  export let href = null;
  export let color = "white";

  const colorVariants = {
    white: 'text-primary bg-white ring-white hover:text-secondary hover:ring-white lowercase',
    whiteOutline: 'text-white bg-transparent ring-white hover:text-primary hover:ring-white hover:bg-white lowercase',
    primary: 'text-white bg-primary ring-primary hover:ring-secondary hover:bg-secondary lowercase',
    primaryOutline: 'text-primary bg-transparent ring-primary hover:text-white hover:bg-primary lowercase',
  }
</script>
<Button {href} on:click type={$$props.type ?? 'button'} class="{$$props.class} {colorVariants[color]} transition ring-1 !py-1.5 !text-sm !font-semibold rounded-sm mt-3"><slot /></Button>
