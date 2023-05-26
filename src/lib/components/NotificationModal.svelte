<script>
  import { browser } from "$app/environment";
  import { Modal } from "flowbite-svelte";
	import Button from "./Button.svelte";

  export let title;
  export let repeatNthRequest = 8;

  let modalCounter = browser ? window.sessionStorage.getItem('modalCounter') ?? 0 : 0;
  if (browser) window.sessionStorage.setItem('modalCounter', ++modalCounter);

</script>


<Modal 
  title="{ title ?? 'Bericht' }" 
  autoclose 
  open="{ browser && !(modalCounter % repeatNthRequest) }"
  backdropClasses="bg-black bg-opacity-50 dark:bg-opacity-80 backdrop-blur"
  >
  <slot name='message'>
    <p>Philippa, klasse wonen heeft een naam.</p>
  </slot>
  <svelte:fragment slot='footer'>
    <slot name="footer">
      <Button>Sluit bericht</Button>
    </slot>
  </svelte:fragment>
</Modal>