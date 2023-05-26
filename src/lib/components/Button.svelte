<script>
  import { Button } from 'flowbite-svelte';

  export let href;
  export let color = "gold";

  const colorVariants = {
    gold: 'text-white bg-gold hover:bg-gold',
    teal: 'text-white bg-teal hover:bg-teal',
  }
</script>

<Button {href} on:click type={$$props.type ?? 'button'} class="{$$props.class} {colorVariants[color]} !py-1.5 !text-sm uppercase hover:ring-white hover:ring-2 rounded-sm"><slot /></Button>
