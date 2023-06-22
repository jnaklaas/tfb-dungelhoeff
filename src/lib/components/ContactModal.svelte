<script>
  import { browser } from "$app/environment";
  import { Modal } from "flowbite-svelte";
	import Button from "./Button.svelte";
  import Form from "./Form.svelte";

  export let toggleModal = false;
  export let title = '';
  export let fields = [
    {id: 'firstname', label: 'Voornaam*'},
    {id: 'name', label: 'Naam*'},
    {id: 'email', type: 'email', label: 'E-mail*'},
    {id: 'tel', type: 'tel', label: 'Telefoonnummer*'},
  ];

  $: composedFields = [ 
    ...fields, 
    {id: 'message', type:'hidden', value: title},
    {id: 'subject', type:'hidden', value: title},
  ];
</script>


<Modal {title} autoclose={false} outsideclose bind:open="{toggleModal}">
  <slot name='message'>
    <Form id="{$$props.id || null}" bind:fields="{composedFields}" action="?/contact" submitText="Verzenden" color="white" btnColor="primaryOutline" noMessage></Form>
  </slot>
  <svelte:fragment slot='footer'></svelte:fragment>
</Modal>