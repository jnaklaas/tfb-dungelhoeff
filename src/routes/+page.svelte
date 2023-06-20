<script>
	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Quote from "$lib/components/Quote.svelte";
	import NotificationBall from "$lib/components/NotificationBall.svelte";

  import HeroImg from '$lib/images/hero1.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt4 from '$lib/images/ext4.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/int4.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv11 from '$lib/images/env11.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgKoppel from '$lib/images/koppel.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
	import Cta from "$lib/components/Cta.svelte";
</script>

<article>
  <Hero image={HeroImg} imageFullHeight imageClass="object-[center_90%]">
    <!-- <p>Oplevering najaar 2023</p>
    <p>Aankoop 6% BTW mogelijk</p> -->
    <svelte:fragment slot="notificationBall">
      <NotificationBall>Aankoop 6% BTW mogelijk</NotificationBall>
    </svelte:fragment>
  </Hero>

  <!-- <Content class="!mb-6 xl:!mb-12"> -->
  <Content>
    <!-- <svelte:fragment slot="title"><strong>Villa Vigo,</strong> viva het fijne leven</svelte:fragment> -->
    <svelte:fragment slot="title"><strong>Villa Vigo,</strong> voluit woonplezier in hartje Lier</svelte:fragment>
    <p>Wil jij eigentijds, comfortabel en duurzaam wonen? Én ook nog eens op een superligging in hartje Lier? Dan mag je bij Villa Vigo héél veel vakjes aanvinken. 
      Met een appartement in Villa Vigo heb je <strong>alles om voluit van het leven te genieten</strong>. 
    </p>
    <Cta href="/aanbod" color="primary">Ontdek het aanbod</Cta>
  </Content>

  
  <Content image={ImgEnv11} imageLeft>
    <svelte:fragment slot="title">Villa Vigo heeft <strong>héél veel in petto</strong></svelte:fragment>
    <p>Villa Vigo is een <strong>nieuw, stijlvol en slim ontworpen woonproject in Lier, </strong> midden een zeer fijne buurt op de Dungelhoeff-site vlak bij het centrum.  Ontdek snel wat Villa Vigo als jouw thuisbasis allemaal voor jou in petto heeft. Want zo zal je al <strong>najaar 2023</strong> aangenaam verrast zijn door je <strong>kwaliteitsvol en energiezuinig</strong> appartement met een moderne <strong>uitstraling</strong> en veel lichtinval op een <strong>uitstekende plek</strong>. 
    </p>
    <Cta href="/ligging" color="primary">Ontdek de locatie</Cta>
  </Content>

  <Quote>In Villa Vigo heb je alles om voluit van het leven te genieten</Quote>
  
  <Content image={ImgInt4} boxedText>
    <svelte:fragment slot="title">Wooncomfort, met de <strong>W</strong> van <strong>Wow</strong>!</svelte:fragment>
    <p>Wees er maar zeker van: een appartement in Villa Vigo vult precies in wat je van een nieuwe thuis kan verlangen. Een <strong>doordacht ontwerp</strong> met een slimme indeling, oog voor <strong>duurzaamheid</strong> en een <strong>kwalitatieve afwerking</strong> – die je deels zelf nog mag invullen – zorgen samen voor een hoogstaand wooncomfort. En vanuit de <strong>picobello locatie</strong> sta je in slechts enkele minuten in het centrum van Lier óf in de natuur. </p>
    <Cta>Download de voorbeeldplannen</Cta>
  </Content>

  <Quote>
    Elke dag een zee van wooncomfort op enkele stappen van centrum Lier
  </Quote>
    
  <Content image={ImgKoppel}>
    <svelte:fragment slot="title">Oefen alvast je <strong>smile</strong></svelte:fragment>
    <p>Wat je plannen ook zijn, in Villa Vigo komt alles mooi samen om fantastisch te wonen. De <strong>perfecte mix</strong> van comfort, faciliteiten en voorzieningen. Hier ga je met de glimlach door het leven. En ook om te investeren, is Villa Vigo méér dan de moeite waard. Vanaf dag 1 een <strong>zeer interessant huurrendement</strong> en door de centrumlocatie <strong>op termijn een mooie meerwaarde</strong>.</p>
    <Cta color="primary" href="/contact">Contacteer onze woonadviseur</Cta>
  </Content>
</article>