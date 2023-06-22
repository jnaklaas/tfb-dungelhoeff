<script>
  import { browser } from "$app/environment";
  import { Modal } from "flowbite-svelte";
	import Button from "./Button.svelte";
  import Form from "./Form.svelte";

  export let toggleModal = false;
  export let file;
  export let filetype = '';

  $: fields = [
    {id: 'firstname', label: 'Voornaam*'},
    {id: 'name', label: 'Naam*'},
    {id: 'email', type: 'email', label: 'E-mail*'},
    {id: 'tel', type: 'tel', label: 'Telefoonnummer*'},
    {id: 'file', type: 'hidden', value: file},
    {id: 'subject', type: 'hidden', value: 'Download'},
  ];
</script>


<Modal title="Download {filetype} {file ?? ''}" autoclose={false} outsideclose bind:open="{toggleModal}">
  <slot name='message'>
    <Form id="{$$props.id || null}" bind:fields="{fields}" action="?/download" submitText="Download" color="white" btnColor="primaryOutline" noMessage></Form>
  </slot>
  <svelte:fragment slot='footer'></svelte:fragment>
</Modal>