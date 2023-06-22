<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

	import Hero from "$lib/components/Hero.svelte";
  import Content from "$lib/components/Content.svelte";
  import Icon from '$lib/components/Icon.svelte';
  import DownloadModal from '$lib/components/DownloadModal.svelte';
	import Availability from '$lib/components/Availability.svelte';
  import Cta from "$lib/components/Cta.svelte";
	import Quote from '$lib/components/Quote.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import NotificationBall from '$lib/components/NotificationBall.svelte';

  import ImgExt3 from '$lib/images/Lier_Cam_03_.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgExt2 from '$lib/images/Lier_Cam_02_.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInt4 from '$lib/images/CAM04.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  import ImgInv1 from '$lib/images/inv1.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';
  // import ImgEnv38 from '$lib/images/TRICKS-FOR-BRICKS_LIER_OMGEVINGSBEELDEN_WEB_20230517_038.jpg?w=480;1024;1920&format=webp;avif;jpg&meta';

  /** @type {import('./$types').PageData} */
  export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

  let toggleModal = false;
  let togglePlannenModal = false;
  let toggleInfoModal = false;
  let toggleRendementModal = false;
  let file, filetype;

  const displayDownloadModal = (e) => {
    toggleModal = true;
    file = e.detail.file;
    filetype = e.detail.filetype ?? '';
  };

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
    if(form && form.response.success) {
      if (form.response.file) downloadFile(`/dungelhoeff-${form.response.file}.pdf`);
      showFormResponseNotification = true;
      setTimeout(() => {
        showFormResponseNotification = false;
      }, 8000);
    }
  });
</script>

<article>
  <h1 class="hidden">Aanbod</h1>
  <Hero image={ImgExt3} imageFullHeight>
    <svelte:fragment slot="notificationBall">
      <NotificationBall>
        <p class="mb-0">Aankoop 6% BTW mogelijk</p>
        <p class="mb-0">Oplevering najaar 2023</p>
      </NotificationBall>
    </svelte:fragment>
  </Hero>

  <Content>
    <svelte:fragment slot="title">Waar ga jij voor in <strong>Villa Vigo</strong>?</svelte:fragment>
    <p>
      Villa Vigo bestaat uit 21 <strong>kwaliteitsvolle appartementen</strong>, verdeeld over twee gebouwen die 2 en 3 verdiepingen tellen. De appartementen zijn 64 tot 99m<sup>2</sup> groot, hebben 1 of 2 volwaardige slaapkamers en beschikken allemaal over een ruim terras.
    </p>
    <Cta href="#ontdek-de-appartementstypes" color="primary">Ontdek de appartementstypes</Cta>
  </Content>

  <Quote>Verhuisplannen op korte termijn? Villa Vigo wordt al in het najaar van 2023 opgeleverd!</Quote>
  
  <Content image={ImgExt2} imageClass="object-[95%_center]">
    <svelte:fragment slot="title">Voluit <strong>comfortabel</strong> wonen</svelte:fragment>
    <p>Binnen of buiten? Waar je ook bent, je zal als eigenaar trots zijn op je woning in Villa Vigo. De gebouwen hebben dankzij de hoogwaardige, eigentijdse architectuur en kwalitatieve, duurzame materialen een <strong>stijlvolle uitstraling</strong>. De ruime appartementen zijn doordacht ingedeeld en hebben een mooi zuid-zuidwest georiënteerd inpandig terras. Grote raampartijen laten véél licht binnen in je woonkamer.</p>
    <Cta color="primary" href="/contact">Contacteer onze woonadviseur</Cta>
  </Content>
  
  <Content image={ImgInt4} imageLeft>
    <svelte:fragment slot="title"><strong>Kwaliteit</strong> gekoppeld aan <strong>duurzaamheid</strong></svelte:fragment>
    <p>De <strong>afwerking</strong> kan je bij Villa Vigo voor een stuk nog zelf bepalen. Zo is inspraak bijvoorbeeld mogelijk voor je keuken, sanitair en vloer- en wandbekleding. Op die manier wordt je appartement écht naar je wens gerealiseerd. Ook qua <strong>technieken</strong> wordt slim ingezet. Zo is er <strong>vloerverwarming</strong> voorzien – wat altijd super aangenaam aanvoelt – en zal de verwarming gebeuren via <strong>warmtepompen</strong>. Dat is naast duurzaam en energiezuinig ook zeer handig. Met de warmtepomp kan je ruimtes zowel verwarmen als koelen. Daarnaast voorzien privatieve <strong>PV-panelen</strong> in je eigen elektriciteitsopwekking en het ventilatiesysteem D garandeert je dan weer een optimale luchtkwaliteit, warmterecuperatie en energiebesparing.</p>
  </Content>

  <Quote>De afwerking kan je bij Villa Vigo nog deels zelf bepalen.</Quote>

  <Content id="ontdek-de-appartementstypes">
    <svelte:fragment slot="title">Ontdek de appartementstypes</svelte:fragment>
    <p><strong>Villa Vigo telt 21 appartementen met 1 of 2 slaapkamers</strong>, die verdeeld zijn over 2 gebouwen. Alle appartementen hebben een ruim inpandig terras en zijn zeer doordacht ingericht. Geen vierkante meter gaat verloren.</p>
    <p><strong>Ontdek hieronder de Villa Vigo voorbeeldplannen</strong>. Wenst u graag het volledige aanbod te bekijken? Maak dan meteen een afspraak met één van onze woonadviseurs.</p>
  </Content>

  <Availability id="aanbod" units={data.units} on:downloadFile={displayDownloadModal}>
    <svelte:fragment slot="cta">
      <Cta on:click={() => togglePlannenModal = true} color="primary">Ik wil de werf bezoeken</Cta><br>
      <Cta on:click={() => toggleInfoModal = true} color="primary">Ik wil meer info</Cta>
    </svelte:fragment>
  </Availability>
  
  <Content image="{ImgInv1}" imageSquare>
    <svelte:fragment slot="title">Investeren in Villa Vigo? <strong>Slim!</strong></svelte:fragment>
    <p>Vastgoed blijft een <strong>veilige en rendabele investering</strong>. En investeren in Villa Vigo is zeker een slimme zet. Gesitueerd op een betaalbare centrumlocatie is er genoeg potentieel met een grote en financieel gezonde huurderspool. Dit garandeert dan ook mooie verhuurprijzen die vanaf de eerste dag een <strong>interessant huurrendement</strong> kunnen opleveren. 
    </p><p>Centrumlocaties zijn bovendien schaars en leveren bij verkoop een hogere meerwaarde op. Verder mag je bij Villa Vigo ook rekenen op een <strong>snelle oplevertijd</strong> – najaar 2023 al – waardoor je ook snel over huurinkomsten beschikt. En het succes van alle voorgaande projecten op de Dungelhoeff-site toont aan dat de interesse groot is!</p>
    <Cta color="primary" on:click={() => toggleRendementModal = true}>Bereken mijn rendement</Cta>
  </Content>

  
  <!-- <Content image={HeroImg} boxedText>
    <svelte:fragment slot="title">Extra interessant: verlaagd btw-tarief van 6%</svelte:fragment>
    <p>Dit nieuwbouwproject is een afbraak-wederopbouwproject. Daardoor kan je als koper genieten van het tijdelijk <strong>verlaagd btw-tarief van 6%</strong>, indien voldaan wordt aan bepaalde voorwaarden.</p>
  </Content> -->

</article>

<DownloadModal id="download" bind:toggleModal={toggleModal} bind:file={file} bind:filetype={filetype}/>
<ContactModal id="bezoek_werf" bind:toggleModal={togglePlannenModal} title="Ik wil de werf bezoeken"/>
<ContactModal id="meer_info" bind:toggleModal={toggleInfoModal} title="Ik wil meer info"/>
<ContactModal id="bereken_rendement" bind:toggleModal={toggleRendementModal} title="Bereken mijn rendement"/>


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