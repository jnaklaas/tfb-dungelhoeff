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
  <h1><strong>Scaldia</strong>, fijn wonen aan het water op De Zaat</h1>
  <p>Dat De Zaat in Temse <strong>dé top woonlocatie</strong> in de regio is, 
    hoeven we jou alvast niet meer te vertellen. Vele gezinnen maakten 
    van De Zaat inmiddels hun favoriete <strong>thuishaven langs de Schelde</strong>.</p>
</Hero>

<Content>
  <svelte:fragment slot="title"><strong>Scaldia,</strong> modern wooncomfort op een <strong>unieke plek</strong></svelte:fragment>
  <p>Scaldia is het nieuwe, stijlvolle en duurzame woonproject op De Zaat, aan de oevers 
    van de Schelde. Kwaliteitsvol en energiezuinig, met een eigentijdse uitstraling en 
    <strong>veel modern wooncomfort op deze unieke plek</strong>. 
  </p>

  <p>Woonplezier ten top dus, want zo’n prachtige thuishaven wil jij natuurlijk ook. 
    En vergeet niet: dit is <strong>jouw laatste kans</strong> om te wonen aan het water 
    met zicht op de Schelde!
  </p>
</Content>

<Content>
  <svelte:fragment slot="title">Benieuwd hoe ook jij kunt aanmeren bij <strong>Scaldia?</strong></svelte:fragment>
  <p>
    Laat hier je gegevens achter en we nemen met jou als eerste contact op wanneer de verkoop wordt opgestart.
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