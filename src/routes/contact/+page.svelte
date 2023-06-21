<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
	import Form from "$lib/components/Form.svelte";
	import Contact from "$lib/components/Contact.svelte";  
  import Icon from '$lib/components/Icon.svelte';

  import logoHeylen from "$lib/images/logo-heylen-vastgoed.svg";
  import logoDungelhoeffW from "$lib/images/dungelhoeff-logo-w.svg";
  import logoCordeel from '$lib/images/logo-cordeel.svg';


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


<article>
  <h1 class="hidden">Contact</h1>

  <!-- <Hero image={ImgExt3}/> -->

  <Contact>
    <svelte:fragment slot=contactDetails>
      <h2 class="font-semibold">Contacteer ons</h2>
      <p>Wil u meer weten over Villa Vigo? Heeft u specifieke vragen? Maak een afspraak via het contactformulier of neem contact op met onze woonadviseur.</p>
      <h3>Projectadres</h3>
      <p>      
        Mechelsesteenweg 28, Lier
      </p>
      <h3>Verkopende partijen</h3>
      <p>
        <img class="float-right h-[1.4em] mt-1" src="{logoHeylen}" alt="Heylen Vastgoed">
        <strong>Heylen Vastgoed</strong><br>03 361 00 03</p>
      <p>
        <img class="float-right h-[1.4em] mt-1" src="{logoDungelhoeffW}" alt="Dungelhoeff woonadviseur">
        <strong>Dungelhoeff woonadviseur</strong><br>Thomas Van der Sypt<br>0473 43 02 32
      </p>
    </svelte:fragment>
    <svelte:fragment slot=form>
      <h2 class="font-semibold text-[2em] text-white">Contactformulier</h2>
      {#if form && form.response.success} <p class="text-green-600 font-semibold">{form.response.message}</p>{/if}
      <Form action="/contact" {fields}></Form>
    </svelte:fragment>
  </Contact>

  <Content>
    <svelte:fragment slot=title><strong>Cordeel</strong>, betrouwbare partner voor projectontwikkeling</svelte:fragment>
    <p>Met Cordeel heb je een betrouwbare partner en ervaren specialist op het vlak van bouwprojecten en ontwikkelingsdossiers. Cordeel kan dan ook bogen op sterke omzetcijfers en beschikt over een stevige solvabiliteit. De geschiedenis van Cordeel gaat zelfs terug tot 1934. Het internationaal familiebedrijf is sindsdien uitgegroeid tot een gevestigde onderneming die actief is over heel Europa, van Frankrijk tot Servië.</p>
    <p>
      <img class="h-8 mt-8" src="{logoCordeel}" alt="Cordeel"></p>
  </Content>

</article>

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