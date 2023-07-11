<script>
	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Quote from "$lib/components/Quote.svelte";
  import Collage from "$lib/components/Collage.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import Container from "$lib/components/Container.svelte";
	// import Map from "$lib/components/Map.svelte";

  import ImgEnv2 from '$lib/images/env2.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv15 from '$lib/images/env15.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv28 from '$lib/images/env28.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv46 from '$lib/images/env46.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgPlan from '$lib/images/plan.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv5 from '$lib/images/env5.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv18 from '$lib/images/env18.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv31 from '$lib/images/env31.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv40 from '$lib/images/env40.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import Img18 from '$lib/images/img18.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';

  
  // /** @type {import('./$types').PageData} */
  // export let data;
</script>

<article>
  <h1 class="hidden">Ligging</h1>
  <Hero image={ImgEnv2}/>

  <!-- <Content class="!mb-6 xl:!mb-12"> -->
  <Content>
    <svelte:fragment slot="title">Staande ovatie voor... <strong>de locatie</strong></svelte:fragment>
    <p>Villa Vigo vind je op de Dungelhoeff-site, op de hoek van de Kazernedreef met de Mechelsesteenweg. Dat betekent op <strong>wandelafstand van het centrum van Lier</strong> waar je alles vindt wat je nodig hebt: supermarkten, horeca, scholen, dokters, winkels … De stad wordt vaak <strong>'Schoon Lier',</strong> maar ook <strong>'Lierke Plezierke'</strong> genoemd. Ze is gekend als een plek van vrolijke ontspanning met tal van leuke terrasjes, restaurants, sportclubs, cultuur en nog zoveel meer. </p>
  </Content>

  <Content image={ImgEnv5}>
    <svelte:fragment slot="title"><strong>Dungelhoeff</strong>, oude en nieuwe pracht ontmoeten elkaar</svelte:fragment>
    <p>Dungelhoeff is de naam voor de stadsontwikkeling in en rond de voormalige Koninklijke Cadettenschool de <strong>Dungelhoeffkazerne</strong> van Lier. De reconversie van die site startte eind jaren ‘90. De oude kazerne werd gerestaureerd en de omliggende gronden maakten plaats voor private woningen, publieke diensten, recreatie, een woonzorgcentrum, veel groen, een nieuw stedelijk zwembad ... Met Villa Vigo bereikt de site nu zijn <strong>laatste fase</strong> en een <strong>geweldige</strong> metamorfose. </p>
    <Cta href="/aanbod" color="primary">Ontdek het aanbod</Cta>
  </Content>

  <Quote>Met Villa Vigo bereikt de site nu zijn laatste fase en een geweldige metamorfose.</Quote>

  <Content image={ImgEnv28} imageLeft imagePortrait>
    <svelte:fragment slot="title"><strong>Adembenemende natuur</strong> op een zucht afstand</svelte:fragment>
    <p>Rond Lier ligt dan weer veel <strong>prachtige natuur</strong> waar je mooie dorpjes kan ontdekken. Tal van <strong>mooie wandel- en fietsroutes</strong> brengen je langs de mooiste plekjes van de streek. Bovendien zijn er ook tal van culturele bezienswaardigheden en interessante steden te bezoeken in de nabije omgeving.</p>
  </Content>

  <Quote>Wandel- en fietsroutes langs de mooiste plekjes van de streek</Quote>
          
  <Content imageLeft>
    <svelte:fragment slot="title"><strong>Genieten</strong> vanaf dag 1</svelte:fragment>
    <p>Villa Vigo is de laatste fase van de ontwikkeling van de Dungelhoeff-site. Op Villa Vigo na is het project dus volledig opgeleverd. Dat betekent dat je van je <strong>nieuwe koninkrijk</strong> al kan genieten vanaf dag één zonder overlast van andere werven of mogelijke infrastructuurwerken. Bovendien is Dungelhoeff een <strong>rustige buurt</strong> waar er alleen verkeer van bewoners is en waar alle wagens ook ondergronds worden geparkeerd.</p>

    <p>Villa Vigo is dé plek om rustig en comfortabel te wonen en te leven in een unieke omgeving waar je nog rust, stilte en natuur vindt. </p>
    
  </Content>

  <Collage images={[ImgEnv18, ImgEnv31, Img18]} lightbox/>

  <Quote>Villa Vigo is dé plek om rustig en comfortabel te wonen</Quote>

  <Content image={ImgPlan}>
    <svelte:fragment slot="title">Mobiliteit: <strong>nóg een extra troef</strong></svelte:fragment>
    <p>Neem je vandaag de wagen, de bus of de trein? Villa Vigo ligt op een toplocatie in het hart van de stad en is net zo <strong>gemakkelijk bereikbaar</strong> met de auto als met het openbaar vervoer. Op een steenworp afstand is er het station en daarnaast zijn er diverse parkeermogelijkheden in de buurt. Je woont hier dus dicht bij <strong>alle nodige faciliteiten</strong> én hebt <strong>prima verbindingen</strong> naar de omliggende steden. Als bewoner van Villa Vigo kan je jouw fiets als je auto veilig in de ondergrondse garage parkeren.</p>
    <Cta color="primary" href="/contact">Contacteer onze woonadviseur</Cta>
  </Content>

  <!-- <Carousel width="default" images={data.images} /> -->
</article>

<!-- <Map/> -->