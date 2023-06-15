<script>
	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Quote from "$lib/components/Quote.svelte";

  import HeroImg from '$lib/images/hero.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt4 from '$lib/images/Lier_Cam_04_.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/CAM04.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv38 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_038.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
</script>

<article>
  <Hero {HeroImg}>
    <!-- <h1 class="mb-2"><strong>Villa Vigo</strong>, voluit woonplezier in hartje Lier</h1> -->
  </Hero>

  <!-- <Content class="!mb-6 xl:!mb-12"> -->
  <Content>
    <!-- <svelte:fragment slot="title"><strong>Villa Vigo,</strong> viva het fijne leven</svelte:fragment> -->
    <svelte:fragment slot="title"><strong>Villa Vigo,</strong> voluit woonplezier in hartje Lier</svelte:fragment>
    <p>Wil jij eigentijds, comfortabel en duurzaam wonen? Én ook nog eens op een superligging in hartje Lier? Dan mag je bij Villa Vigo héél veel vakjes aanvinken. 
      Met een appartement in Villa Vigo heb je <strong>alles om voluit van het leven te genieten</strong>. 
    </p>
  </Content>

  <Content image={ImgExt4} boxedText>
    <svelte:fragment slot="title"><strong>Villa Vigo</strong> heeft héél veel in petto</svelte:fragment>
    <p>Villa Vigo is een <strong>nieuw, stijlvol en slim ontworpen woonproject in Lier, </strong> midden een zeer fijne buurt op de Dungelhoeff-site vlak bij het centrum.  Ontdek snel wat Villa Vigo als jouw thuisbasis allemaal voor jou in petto heeft. Want zo zal je al najaar 2023 aangenaam verrast zijn door je <strong>kwaliteitsvol en energiezuinig</strong> appartement met een moderne <strong>uitstraling</strong> en veel lichtinval op een <strong>uitstekende plek</strong>. 
    </p>
  </Content>

  <Content image={ImgInt4} >
    <svelte:fragment slot="title">Wooncomfort, met de w van wow!</svelte:fragment>
    <p>Wees er maar zeker van: een appartement in Villa Vigo vult precies in wat je van een nieuwe thuis kan verlangen. Een <strong>doordacht ontwerp</strong> met een slimme indeling, oog voor <strong>duurzaamheid</strong> en een <strong>kwalitatieve afwerking</strong> – die je deels zelf nog mag invullen – zorgen samen voor een hoogstaand wooncomfort. En vanuit de <strong>picobello locatie</strong> sta je in slechts enkele minuten in het centrum van Lier óf in de natuur. </p>
  </Content>

  <Quote>
    <strong>Villa Vigo</strong> - voluit leven én<br>comfortabel wonen doe je zo!
  </Quote>
    
  <Content image={ImgEnv38} imageLeft>
    <svelte:fragment slot="title">Oefen alvast je smile</svelte:fragment>
    <p>Wat je plannen ook zijn, in Villa Vigo komt alles mooi samen om fantastisch te wonen. De <strong>perfecte mix</strong> van comfort, faciliteiten en voorzieningen. Hier ga je met de glimlach door het leven. En ook om te investeren, is Villa Vigo méér dan de moeite waard. Vanaf dag 1 een <strong>zeer interessant huurrendement</strong> en door de centrumlocatie <strong>op termijn een mooie meerwaarde</strong>.</p>
  </Content>
</article>