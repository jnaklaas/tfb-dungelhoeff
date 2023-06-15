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
    {id: 'file', type: 'hidden', value: file},
  ];
</script>


<Modal title="Download {filetype} {file ?? ''}" autoclose={false} bind:open="{toggleModal}">
  <slot name='message'>
    <Form bind:fields="{fields}" action="/aanbod" submitText="Download" color="white" btnColor="primary" noMessage></Form>
  </slot>
  <svelte:fragment slot='footer'></svelte:fragment>
</Modal>