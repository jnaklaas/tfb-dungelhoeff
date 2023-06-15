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
  import ImgExt3 from '$lib/images/Lier_Cam_03_.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt2 from '$lib/images/Lier_Cam_02_.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/CAM04.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgKoppel from '$lib/images/koppel.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  // import ImgEnv38 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_038.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';


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
      // setTimeout(() => {
      //   showFormResponseNotification = false;
      // }, 8000);
    }
  });
</script>


<article>
  <h1 class="hidden">Contact</h1>

  <Hero HeroImg={ImgExt3}/>

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
      <p><strong>Dungelhoeff woonadviseur</strong><br>Thomas Van der Sypt<br>0473 43 02 32</p>
    </svelte:fragment>
    <svelte:fragment slot=form>
      <h2 class="font-semibold text-[2em] text-white">Contactformulier</h2>
      {#if form && form.response.success} <p class="text-green-600 font-semibold">{form.response.message}</p>{/if}
      <Form action="/contact" {fields}></Form>
    </svelte:fragment>
  </Contact>

  <Content>
    <svelte:fragment slot=title>Cordeel, betrouwbare partner voor projectontwikkeling</svelte:fragment>
    <p>Met Cordeel heb je een betrouwbare partner en ervaren specialist op het vlak van bouwprojecten en ontwikkelingsdossiers. Cordeel kan dan ook bogen op sterke omzetcijfers en beschikt over een stevige solvabiliteit. De geschiedenis van Cordeel gaat zelfs terug tot 1934. Het internationaal familiebedrijf is sindsdien uitgegroeid tot een gevestigde onderneming die actief is over heel Europa, van Frankrijk tot Servië.</p>
  </Content>


</article>

{#if form && form.response }
<div class="fixed right-0 bottom-0 m-4 z-30">
  <Toast 
    transition={fly} params="{{x: 200}}"
    color="{form.response.success ? 'green': 'red'}"
    divClass="mb-4 w-full max-w-xs p-4 bg-white ring-1 ring-{form.response.success ? 'green': 'red'}-100 text-{form.response.success ? 'green': 'red'}-500 shadow"
    defaultIconClass="w-8 h-8 mr-2"
    bind:open={showFormResponseNotification}>
    <svelte:fragment slot="icon">
      <Icon name={form.response.success ? 'circleCheck' : 'triangleExclamation'}/>
    </svelte:fragment>
    {form.response.message}
  </Toast>


</div>  
{/if}