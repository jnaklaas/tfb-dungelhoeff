<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Hero from "../lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
	import Form from "$lib/components/Form.svelte";
	import Contact from "$lib/components/Contact.svelte";
	import Cta from "$lib/components/Cta.svelte";

  import HeroImg from '../lib/images/hero.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';


  import Icon from '$lib/components/Icon.svelte';

  /** @type {import('./$types').ActionData} */
  export let form;

  const fields = [
    {id: 'firstname', label: 'Voornaam*'},
    // {id: 'name', label: 'Naam*'},
    // {id: 'email', type: 'email', label: 'E-mail*'},
    // {id: 'tel', type: 'tel', label: 'Telefoonnummer*'},
    // {id: 'city', label: 'Woonplaats*'},
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
<Hero {HeroImg}>
  <h1 class="mb-2"><strong>Villa Vigo</strong>, voluit woonplezier in hartje Lier</h1>
</Hero>

<Content class="!mb-6 xl:!mb-12">
  <svelte:fragment slot="title"><strong>Villa Vigo,</strong> viva het fijne leven</svelte:fragment>
  <p>
    Wil jij eigentijds, comfortabel en duurzaam wonen? Én ook nog eens op een superligging
    in hartje Lier? Dan mag je bij Villa Vigo héél veel vakjes aanvinken. 
    Met een appartement in Villa Vigo heb je <strong>alles om voluit van het leven te genieten</strong>. 
  </p>
</Content>

<Content>
  <svelte:fragment slot="title"><strong>Villa Vigo</strong> heeft héél veel in petto</svelte:fragment>
  <p>
    Villa Vigo is een <strong>nieuw, stijlvol en slim ontworpen woonproject in Lier, </strong>
    midden een zeer fijne buurt op de Dungelhoeff-site vlak bij het centrum. 
    Ontdek snel wat Villa Vigo als jouw thuisbasis allemaal voor jou in petto heeft. 
    Want zo zal je al voorjaar 2024 aangenaam verrast zijn door je 
    <strong>kwaliteitsvol en energiezuinig</strong> appartement met 
    een moderne <strong>uitstraling</strong> en veel lichtinval 
    op een <strong>uitstekende plek</strong>. 
  </p>
</Content>

<Contact>
  <!-- <svelte:fragment slot=title>Contacteer ons</svelte:fragment>
  <svelte:fragment slot=text></svelte:fragment> -->
  <!-- <svelte:fragment slot=contactDetails>
    <h2 class="font-semibold">Contacteer ons</h2>
    <p>Wil u meer weten over Villa Vigo? Heeft u specifieke vragen? Maak een afspraak via het contactformulier of neem contact op met onze woonadviseur.</p>
    <h3>Projectadres</h3>
    <p>      
      Mechelsesteenweg 28, Lier
    </p>
  </svelte:fragment> -->
  <svelte:fragment slot=form>
    <h2 class="font-semibold text-2xlem">Contactformulier</h2>
    {#if form && form.response.success} <p class="text-green-600 font-semibold">{form.response.message}</p>{/if}
    <Form action="/" {fields}></Form>
  </svelte:fragment>
</Contact>

</article>

{#if form && form.response }
<div class="fixed right-0 bottom-0 m-4">
  <Toast 
    transition={fly} params="{{x: 200}}"
    color="{form.response.success ? 'green': 'red'}"
    divClass="mb-4 w-full max-w-xs z-20 p-4"
    bind:open={showFormResponseNotification}>
    <svelte:fragment slot="icon">
      <Icon name={form.response.success ? 'circleCheck' : 'triangleExclamation'}/>
    </svelte:fragment>
    {form.response.message}
  </Toast>
</div>  
{/if}