<script>
  import { Button } from 'flowbite-svelte';

  export let href;
  export let color = "white";

  const colorVariants = {
    white: 'text-white bg-transparent bg-opacity-10 ring-white hover:text-black hover:bg-white hover:bg-opacity-20',
  }
</script>

<Button {href} on:click type={$$props.type ?? 'button'} class="{$$props.class} {colorVariants[color]}  ring-2 !py-1.5 !text-sm !font-bold rounded-sm mt-3"><slot /></Button>
