<script>
	import Hero from "../lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
	// import Form from "$lib/components/Form.svelte";
	// import Contact from "$lib/components/Contact.svelte";

  import HeroImg from '../lib/images/hero.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';

  /** @type {import('./$types').ActionData} */
  export let form;

  const fields = [
    {id: 'firstname', label: 'Voornaam*'},
    {id: 'name', label: 'Naam*'},
    {id: 'email', type: 'email', label: 'E-mail*'},
    {id: 'tel', type: 'tel', label: 'Telefoonnummer*'},
    {id: 'city', label: 'Woonplaats*'},
  ];
</script>


<article>
<Hero {HeroImg}>
  <h1><strong>Villa Vigo</strong>, voluit woonplezier in hartje Lier</h1>
</Hero>

<Content>
  <svelte:fragment slot="title"><strong>Villa Vigo,</strong> viva het fijne leven</svelte:fragment>
  <p>
    Wil jij eigentijds, comfortabel en duurzaam wonen? Én ook nog eens op een superligging
    in hartje Lier? Dan mag je bij Villa Vigo héél veel vakjes aanvinken. 
    Met een appartement in Villa Vigo heb je <strong>alles om voluit van het leven te genieten</strong>. 
  </p>
</Content>

<Content>
  <svelte:fragment slot="title">Villa Vigo heeft héél veel in petto</svelte:fragment>
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

 

 



<!-- <Hero cta={{link:'#contact', text:'Registreer je nu'}}>
  <svelte:fragment slot=title>Hét <strong>woonicoon</strong> aan de kust</svelte:fragment>
  <svelte:fragment slot=text><p>Philippa is een <strong>nieuw, elegant en doordacht</strong> woonproject in 
    Knokke-Heist, vlakbij strand en zee. Kwaliteitsvol en duurzaam, met een 
    moderne uitstraling en extra veel wooncomfort op een unieke plek. Zó wil 
    ook jij vast en zeker wonen én genieten van het leven!</p>
    <h3>Benieuwd naar de plannetjes die Philippa daarvoor in petto heeft?</h3>
    <p>Registreer je en krijg als allereerste de laatste nieuwtjes over al haar
     avonturen.</p>
  </svelte:fragment>
</Hero> -->
<!-- 
<div class="sm:mx-4 md:mx-24">
  <div class="my-4 md:my-20 lg:container">
    <div id="contact" class="bg-coolgray text-darkteal p-4 md:p-8 lg:px-20 lg:py-10">
      <h2 class="text-gold">Contact</h2>
      {#if form?.success} <p class="text-lime-600 font-semibold">{form.success}</p>{/if}
      <Form action="/#contact" {fields}></Form>
    </div>
  </div>
</div>

<Contact>
  <!-- <svelte:fragment slot=title>Contacteer ons</svelte:fragment>
  <svelte:fragment slot=text></svelte:fragment> ->
  <svelte:fragment slot=contactDetails>
    <h2 class="font-semibold">Contacteer ons</h2>
    <p>Wil u meer weten over Philippa? Heeft u specifieke vragen? Maak een afspraak via het contactformulier of neem contact op met onze woonadviseur.</p>
    <h3>Projectadres</h3>
    <p>      
      Duinenstraat 9-13, Knokke-Heist
    </p>
    <h3>Dream Estate by Colpin</h3>
    <p>
      <!-- <Img src="{DreamestateLogo}" class="max-h-16 w-auto float-right"/> ->
      Aygline Heene<br>
      +32 (0)50 71 11 20<br>
      +32 (0)478 43 34 78
    </p>
  </svelte:fragment>
  <svelte:fragment slot=form>
    <h2 class="text-gold font-semibold">Contactformulier</h2>
      {#if form?.success} <p class="text-lime-600 font-semibold">{form.success}</p>{/if}
      <Form action="/contact" {fields}></Form>
  </svelte:fragment>
</Contact>-->
</article>