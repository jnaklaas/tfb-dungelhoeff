<script>
	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Carousel from "$lib/components/Carousel.svelte";

  import ImgEnv2 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230516_002.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv15 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_015.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv28 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_028.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv46 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_046.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';

  
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<article>
  <h1 class="hidden">Ligging</h1>
  <Hero HeroImg={ImgEnv2}/>

  <!-- <Content class="!mb-6 xl:!mb-12"> -->
  <Content>
    <svelte:fragment slot="title">Staande ovatie voor... de locatie</svelte:fragment>
    <p>Villa Vigo vind je op de Dungelhoeff-site, op de hoek van de Kazernedreef met de Mechelsesteenweg. Dat betekent op wandelafstand van het centrum van Lier waar je alles vindt wat je nodig hebt: supermarkten, horeca, scholen, dokters, winkels … De stad wordt vaak <strong>'Schoon Lier',</strong> maar ook <strong>'Lierke Plezierke'</strong> genoemd. Ze is gekend als een plek van vrolijke ontspanning met tal van leuke terrasjes, restaurants, sportclubs, cultuur en nog zoveel meer. </p>
  </Content>

  <Content image={ImgEnv15} boxedText>
    <svelte:fragment slot="title">Dungelhoeff, oude en nieuwe pracht ontmoeten elkaar</svelte:fragment>
    <p>Dungelhoeff is de naam voor de stadsontwikkeling in en rond de voormalige Koninklijke Cadettenschool de <strong>Dungelhoeffkazerne</strong> van Lier. De reconversie van die site startte eind jaren ‘90. De oude kazerne werd gerestaureerd en de omliggende gronden maakten plaats voor private woningen, publieke diensten, recreatie, een woonzorgcentrum, veel groen, een nieuw stedelijk zwembad ... Met Villa Vigo bereikt de site nu zijn <strong>laatste fase</strong> en een <strong>geweldige</strong> metamorfose. </p>
  </Content>

  <Content image={ImgEnv28} >
    <svelte:fragment slot="title">Adembenemende natuur op een zucht afstand</svelte:fragment>
    <p>Rond Lier ligt dan weer veel <strong>prachtige natuur</strong> waar je mooie dorpjes kan ontdekken. Tal van <strong>mooie wandel- en fietsroutes</strong> brengen je langs de mooiste plekjes van de streek. Bovendien zijn er ook tal van culturele bezienswaardigheden en interessante steden te bezoeken in de nabije omgeving.</p>
  </Content>
    
  <Content>
    <svelte:fragment slot="title">Mobiliteit: nóg een extra troef</svelte:fragment>
    <p>Neem je vandaag de wagen, de bus of de trein? Villa Vigo ligt op een toplocatie in het hart van de stad en is net zo <strong>gemakkelijk bereikbaar</strong> met de auto als met het openbaar vervoer. Op een steenworp afstand is er het station en daarnaast zijn er diverse parkeermogelijkheden in de buurt. Je woont hier dus dicht bij <strong>alle nodige faciliteiten</strong> én hebt <strong>prima verbindingen</strong> naar de omliggende steden. Als bewoner van Villa Vigo kan je jouw fiets als je auto veilig in de ondergrondse garage parkeren.</p>
  </Content>

  <Carousel width="default" images={data.images} />
      
  <Content image={ImgEnv46} imageLeft lightbox>
    <svelte:fragment slot="title">Genieten vanaf dag 1</svelte:fragment>
    <p>Villa Vigo is de laatste fase van de ontwikkeling van de Dungelhoeff-site. Op Villa Vigo na is het project dus volledig opgeleverd. Dat betekent dat je van je <strong>nieuwe koninkrijk</strong> al kan genieten vanaf dag één zonder overlast van andere werven of mogelijke infrastructuurwerken. Bovendien is Dungelhoeff een <strong>rustige buurt</strong> waar er alleen verkeer van bewoners is en waar alle wagens ook ondergronds worden geparkeerd.</p>

    <p>Villa Vigo is dé plek om rustig en comfortabel te wonen en te leven in een unieke omgeving waar je nog rust, stilte en natuur vindt. </p>
  </Content>

</article>