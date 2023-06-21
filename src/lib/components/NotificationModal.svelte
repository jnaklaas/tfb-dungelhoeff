<script>
  import { browser } from "$app/environment";
  import { Modal } from "flowbite-svelte";
	import Button from "./Button.svelte";

  export let title = 'Bericht';
  export let repeatNthRequest = 8;

  let modalCounter = browser ? window.sessionStorage.getItem('modalCounter') ?? 0 : 0;
  if (browser) window.sessionStorage.setItem('modalCounter', ++modalCounter);

</script>

<Modal 
  {title}
  autoclose 
  outsideclose
  open="{ browser && !(modalCounter % repeatNthRequest) }"
  backdropClasses="bg-coolgray bg-opacity-50 dark:bg-opacity-80 backdrop-blur"
  >
  <slot>
    <p>Aankondiging</p>
  </slot>
  <!-- <svelte:fragment slot='footer'>
    <slot name="footer">
      <Button color="primaryOutline">Sluit bericht</Button>
    </slot>
  </svelte:fragment> -->
</Modal>