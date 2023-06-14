<script>
	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";

  import HeroImg from '$lib/images/hero.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
</script>

<article>
  <h1 class="hidden">Aanbod</h1>
  <Hero {HeroImg}/>

  <Content>
    <svelte:fragment slot="title">Waar ga jij voor in Villa Vigo?</svelte:fragment>
    Villa Vigo bestaat uit 21 <strong>kwaliteitsvolle appartementen</strong>, verdeeld over twee gebouwen die 2 en 3 verdiepingen tellen. De appartementen zijn 64 tot 99m2 groot, hebben 1 of 2 volwaardige slaapkamers en beschikken allemaal over een ruim terras.
  </Content>
  
  <Content image={HeroImg} boxedText>
    <svelte:fragment slot="title">Voluit comfortabel wonen</svelte:fragment>
    <p>Binnen of buiten? Waar je ook bent, je zal als eigenaar trots zijn op je woning in Villa Vigo. De gebouwen hebben dankzij de hoogwaardige, eigentijdse architectuur en kwalitatieve, duurzame materialen een <strong>stijlvolle uitstraling</strong>. De ruime appartementen zijn doordacht ingedeeld en hebben een mooi zuid-zuidwest georiënteerd inpandig terras. Grote raampartijen laten véél licht binnen in je woonkamer.</p>
  </Content>
  
  <Content image={HeroImg}>
    <svelte:fragment slot="title">Kwaliteit gekoppeld aan duurzaamheid</svelte:fragment>
    <p>De <strong>afwerking</strong> kan je bij Villa Vigo voor een stuk nog zelf bepalen. Zo is inspraak bijvoorbeeld mogelijk voor je keuken, sanitair en vloer-en wandbekleding. Op die manier wordt je appartement écht naar je wens gerealiseerd. Ook qua <strong>technieken</strong> wordt slim ingezet. Zo is er <strong>vloerverwarming</strong> voorzien – wat altijd super aangenaam aanvoelt – en zal de verwarming gebeuren via <strong>warmtepompen</strong>. Dat is naast duurzaam en energiezuinig ook zeer handig. Met de warmtepomp kan je ruimtes zowel verwarmen als koelen. Een ventilatiesysteem D garandeert je dan weer een optimale luchtkwaliteit, warmterecuperatie en energiebesparing.</p>
  </Content>
  
  <Content image={HeroImg} imageLeft>
    <svelte:fragment slot="title">Project op mensenmaat</svelte:fragment>
    <p>Dit is een kleinschalig project waar de eigenaars elkaar nog persoonlijk kennen, je elkaar bij de voornaam noemt en er ruimte is voor <strong>hartelijke ontmoetingen</strong>. Fietsen kan je ook veilig bovengronds stallen en je auto kan je parkeren in de gemakkelijk toegankelijke ondergrondse garage waar ook bergingen zijn voorzien.</p>
  </Content>
  
  <Content image={HeroImg}>
    <svelte:fragment slot="title">Investeren in Villa Vigo? Slim!</svelte:fragment>
    <p>Vastgoed blijft een <strong>veilige en rendabele investering</strong>. En investeren in Villa Vigo is zeker een slimme zet. Gesitueerd op een betaalbare centrumlocatie is er genoeg potentieel met een grote en financieel gezonde huurderspool. Dit garandeert dan ook mooie verhuurprijzen die vanaf de eerste dag een <strong>interessant huurrendement</strong> kunnen opleveren. Centrumlocaties zijn bovendien schaars en leveren bij verkoop een hogere meerwaarde op. Verder mag je bij Villa Vigo ook rekenen op een <strong>snelle oplevertijd</strong> – voorjaar 2024 al – waardoor je ook snel over huurinkomsten beschikt. En het succes van alle voorgaande projecten op de Dungelhoeff-site toont aan dat de interesse groot is!</p>
  </Content>
  
  <Content image={HeroImg} boxedText>
    <svelte:fragment slot="title">Extra interessant: verlaagd btw-tarief van 6%</svelte:fragment>
    <p>Dit nieuwbouwproject is een afbraak-wederopbouwproject. Daardoor kan je als koper genieten van het tijdelijk <strong>verlaagd btw-tarief van 6%</strong>, indien voldaan wordt aan bepaalde voorwaarden.</p>
  </Content>

</article>