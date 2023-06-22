<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Quote from "$lib/components/Quote.svelte";
  import Image from "$lib/components/Image.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import Container from "$lib/components/Container.svelte";
	import Form from "$lib/components/Form.svelte";
	import Contact from "$lib/components/Contact.svelte";  
  import Icon from '$lib/components/Icon.svelte';

  import ImgEnv16 from '$lib/images/env16.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt3 from '$lib/images/ext3.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';

  /** @type {import('./$types').ActionData} */
  export let form;
  
  const fields = [
    {id: 'firstname', label: 'Voornaam*'},
    {id: 'name', label: 'Naam*'},
    {id: 'email', type: 'email', label: 'E-mail*'},
    {id: 'tel', type: 'tel', label: 'Telefoonnummer*'},
    {id: 'city', label: 'Woonplaats*'},
  ];
  
  let showFormResponseNotification = false;

  onMount(async () => {
    // Form response feedback + download
    if(form && form.response) {
      showFormResponseNotification = true;
      setTimeout(() => {
        showFormResponseNotification = false;
      }, 8000);
    }
  });
</script>


<Content>
  <svelte:fragment slot="title"><strong>Infoavond</strong> donderdag 6 juli 2023</svelte:fragment>
  <p>Kom kennis maken met Villa Vigo op <strong>donderdag 6 juli 2023 van 17u tot 20u</strong>. <strong>Bezoek de bijna afgewerkte appartementen, ontdek de plannen en prijzen én kom alles te weten over onze energiezuinige technieken!</strong></p>

  <p>Om iedereen persoonlijk te begeleiden, willen wij u vragen om vooraf in te schrijven. Dit kan door het formulier in te vullen met vermelding van het voorkeurstijdstip van uw bezoek. Wij kijken er alvast naar uit om u op donderdagavond 6 juli 2023 in Villa Vigo te mogen verwelkomen.</p>

  <h3>Projectadres</h3>
  <p>
    Kazernedreef <br>
    2500 Lier
  </p>
</Content>

<Contact>
  <svelte:fragment slot=form>
    <h2 class="font-semibold text-[2em] text-white">Registratieformulier</h2>
    {#if form && form.response.success} <p class="text-green-600 font-semibold">{form.response.message}</p>{/if}
    <Form action="/infoavond" {fields} submitText="Registreer" noMessage></Form>
  </svelte:fragment>
</Contact>

<Quote>Ontdek de voordelen van wonen in Villa Vigo ter plaatse op onze infoavond!</Quote>

<Image src={ImgExt3} width="full" class="!mb-0"></Image>


{#if form && form.response }
<div class="fixed right-0 bottom-0 m-4 z-30">
  <Toast 
    transition={fly} params="{{x: 200}}"
    color="{form.response.success ? 'green': 'red'}"
    divClass="mb-4 w-full max-w-xs p-4 bg-white ring-1 {form.response.success ? 'ring-green-100': 'ring-red-100'} {form.response.success ? 'text-green-500': 'text-red-500'} shadow"
    defaultIconClass="w-8 h-8 mr-2"
    bind:open={showFormResponseNotification}>
    <svelte:fragment slot="icon">
      <Icon name={form.response.success ? 'circleCheck' : 'triangleExclamation'}/>
    </svelte:fragment>
    {form.response.message}
  </Toast>


</div>  
{/if}