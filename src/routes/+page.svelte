<script>
  import Img from '@zerodevx/svelte-img';
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Quote from "$lib/components/Quote.svelte";
  import Icon from "$lib/components/Icon.svelte";
	import NotificationBall from "$lib/components/NotificationBall.svelte";
	import NotificationModal from "$lib/components/NotificationModal.svelte";
	import DownloadModal from "$lib/components/DownloadModal.svelte";

  import HeroImg from '$lib/images/hero1.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt4 from '$lib/images/ext4.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/int4.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgEnv11 from '$lib/images/env11.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgAtm1 from '$lib/images/atm1.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
	import Cta from "$lib/components/Cta.svelte";
	import Button from '../lib/components/Button.svelte';

  
  // /** @type {import('./$types').PageData} */
  // export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  let toggleDownloadModal = false;
  let file, filetype;

  let showFormResponseNotification = false;
  let showDownloadResponseNotification = false;
  let downloadResponse = {};

  /**
   * Download a file without browser popup warning
   * @param {string} url The url of the file to download
   * @param {string} filename Set a new filename for the downloaded file (optional)
   */
  const downloadFile = (url, filename = '') => {
    // console.log('download ' + url);
    if (filename.length === 0) filename = url.split('/').pop();
    fetch(url).then( response => {
      if(!response.ok) {
        downloadResponse.success = false;
        downloadResponse.message = 'Er liep iets fout bij het downloaden. Contacteer ons via info@philippa.immo.';
        return console.error(`HTTP error! Status: ${response.status}`);
      }

      // console.log(response.status);
      return response.blob().then(blob => {
        const isIE = false || !!document.documentMode;
        if (isIE) {
          window.navigator.msSaveBlob(blob, filename);
        } else {
          const windowUrl = window.URL || window.webkitURL;
          const href = windowUrl.createObjectURL(blob);
          const a = document.createElement('a');
          a.setAttribute('download', filename);
          a.setAttribute('href', href);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);

          downloadResponse.success = true;
          downloadResponse.message = `Bestand ${filename} is gedownload!`

          showDownloadResponseNotification = true;
          setTimeout(() => {
            showDownloadResponseNotification = false;
          }, 8000);
        }
      });
    });
    // return 1;
  };

  onMount(async () => {
    // Form response feedback + download
    if(form && form.response.success && form.response.file) {
      downloadFile(`/dungelhoeff-${form.response.file}.pdf`);
      showFormResponseNotification = true;
      setTimeout(() => {
        showFormResponseNotification = false;
      }, 8000);
    }
  });
</script>

{#if !form}
<NotificationModal repeatNthRequest=2 title="Infoavond donderdag 6 juli 2023">
  <p>Kom kennis maken met Villa Vigo op <strong>donderdag 6 juli 2023 van 17u tot 20u</strong>. <strong>Bezoek de bijna afgewerkte appartementen, ontdek de plannen en prijzen én kom alles te weten over onze energiezuinige technieken!</strong></p>

  <p>Om iedereen persoonlijk te begeleiden, willen wij u vragen om <a href="/infodag">vooraf in te schrijven</a>.</p>

  <p>We verwelkomen u graag in de Kazernedreef te Lier.</p>
  
  <p>Tot dan!</p>
  
  <p>Het Dungelhoeff team</p>
<p>
  <Img src={HeroImg} class="w-full object-cover"/>
</p>
</NotificationModal>
{/if}

<article>
  <Hero image={HeroImg} imageFullHeight imageClass="object-[center_90%]">
    <!-- <p>Oplevering najaar 2023</p>
    <p>Aankoop 6% BTW mogelijk</p> -->
    <svelte:fragment slot="notificationBall">
      <NotificationBall>
        <p class="mb-0">Aankoop 6% BTW mogelijk</p>
        <p class="mb-0">Oplevering najaar 2023</p>
      </NotificationBall>
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
    <Cta on:click={() => { toggleDownloadModal = true; file = "voorbeeldplannen"; }}>
      Download de voorbeeldplannen <Icon name="download" size="1em" class="ml-2"/>
    </Cta>
  </Content>

  <Quote>
    Elke dag een zee van wooncomfort op enkele stappen van centrum Lier
  </Quote>
    
  <Content image={ImgAtm1} imageClass="object-[80%]">
    <svelte:fragment slot="title">Oefen alvast je <strong>smile</strong></svelte:fragment>
    <p>Wat je plannen ook zijn, in Villa Vigo komt alles mooi samen om fantastisch te wonen. De <strong>perfecte mix</strong> van comfort, faciliteiten en voorzieningen. Hier ga je met de glimlach door het leven. En ook om te investeren, is Villa Vigo méér dan de moeite waard. Vanaf dag 1 een <strong>zeer interessant huurrendement</strong> en door de centrumlocatie <strong>op termijn een mooie meerwaarde</strong>.</p>
    <Cta color="primary" href="/contact">Contacteer onze woonadviseur</Cta>
  </Content>
</article>

<DownloadModal bind:toggleModal={toggleDownloadModal} bind:file={file} bind:filetype={filetype}/>


<div class="fixed right-0 bottom-0 m-4 z-30">
  {#if form && form.response }
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
  {/if}

  {#if form && form.response.success }
  <Toast 
    transition={fly} params="{{x: 200}}"
    color="{downloadResponse.success ? 'green': 'red'}"
    divClass="mb-4 w-full max-w-xs p-4 bg-white ring-1 {downloadResponse.success ? 'ring-green-100': 'ring-red-100'} {downloadResponse.success ? 'text-green-500': 'text-red-500'} shadow"
  defaultIconClass="w-8 h-8 mr-2"
    bind:open={showDownloadResponseNotification}>
    <svelte:fragment slot="icon">
      <Icon name={downloadResponse.success ? 'circleCheck' : 'triangleExclamation'}/>
    </svelte:fragment>
    {downloadResponse.message}
  </Toast>
  {/if}
</div>