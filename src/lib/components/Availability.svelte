<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

  export let units = [];
  export let title = "";
  // possible fields: "id","type","floor","rooms","availability","surfaceGross","terraceGarden","groundSurface","architectCost","constructionCost","price","btwArchitect","basisakte","registratierechten","btwConstructies","erelonen","aktekosten","btwAktekostenErelonen","hypKantoor","totalPrice"
  export let fields = ['rooms', 'surfaceGross', 'totalPrice'];
  // export let showUnavailable = false;
  const sqm = '&#13217;';

  const strings = {
    id: {
      title: "Ref.",
      prefix: "",
      suffix: "",
      transform: null
    },
    type: {
      title: "Type",
      prefix: "",
      suffix: "",
      transform: null
    },
    floor: {
      title: "Verdiep",
      prefix: "",
      suffix: "",
      transform: null
    },
    rooms: {
      title: "Aantal slpk",
      prefix: "",
      suffix: " slaapkamer",
      transform: null
    },
    availability: {
      title: "Beschikbaarheid",
      prefix: "",
      suffix: "",
      transform: null
    },
    surfaceGross: {
      title: "Tot. opp.",
      prefix: "",
      suffix: "m<sup>2</sup>",
      transform: null//(v) => parseFloat(v).toLocaleString('nl-BE', { minimumFractionDigits: 1 })
    },
    terraceGarden: {
      title: "Terras / tuin",
      prefix: "",
      suffix: "",
      transform: null
    },
    totalPrice: {
      title: "Vanafprijs",
      prefix: "",
      suffix: "",
      transform: (v) => parseFloat(v).toLocaleString('nl-BE', { minimumFractionDigits: 0,  style: "currency", currency: "EUR"  })
    },
  };

  const dispatch = createEventDispatcher();
  const downloadFile = (e) => {
    dispatch('downloadFile', {
      file: e.currentTarget.dataset.file,
      filetype: "voorbeeldplan"
    })
  };
</script>



<section class="content mb-12 md:mb-12 xl:mb-24" id="{$$props.id || null}">
  <Container>
    {#if title }<h2><strong>{title}</strong></h2>{/if}
    <Table>
      <TableHead theadClass="tableHead !bg-white !text-primary border-b border-primary">
        {#each fields as field }
        { @const [breakpoint, name] = field.includes(':') ? field.split(':') : [ null, field ] }
        <TableHeadCell class="{ breakpoint ? `hidden ${breakpoint}:table-cell`: ''}">{strings[name].title}</TableHeadCell>
        {/each}
        <TableHeadCell>
          <span class="sr-only">Download</span>
        </TableHeadCell>
      </TableHead>
      <TableBody class="divide-y">
        {#each units as unit, i}
        <TableBodyRow class="border-gray-200">
          {#each fields as field}
          { @const [breakpoint, name] = field.includes(':') ? field.split(':') : [ null, field ] }
          <TableBodyCell
            class="text-coolgray font-semibold {unit.available ? '' : '!text-white'} { breakpoint ? `hidden ${breakpoint}:table-cell`: ''}"
            >
            {strings[name].prefix}{strings[name].transform ? strings[name].transform(unit[name]) : unit[name]}{@html strings[name].suffix}
          </TableBodyCell>
          {/each}
          <!-- <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">App. {unit.id}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'} hidden sm:table-cell">{unit.floor}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{unit.rooms}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{parseFloat(unit.surfaceGross).toLocaleString('nl-BE', { minimumFractionDigits: 1 })} {@html sqm}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{parseFloat(unit.terraceGarden).toLocaleString('nl-BE', { minimumFractionDigits: 1 })} {@html sqm}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'} hidden sm:table-cell !no-underline">{(unit.available) ? 'beschikbaar' : 'verkocht'}</TableBodyCell>
           -->
          <TableBodyCell class="whitespace-nowrap">

            {#if unit.available}
              <button 
                on:click={downloadFile}
                data-file="{unit.id}"
                class="font-semibold text-coolgray hover:underline"
                >
                Download voorbeeldplannen <Icon name="download" size="1em" class="ml-2"/>
              </button>
            {:else}
              <!-- <button class="font-medium hover:underline dark:!text-teal-04 cursor-not-allowed" disabled>
                Download<Icon name="download" size="1.5em" class="pl-1"/>
              </button> -->
            {/if}
          </TableBodyCell>
        </TableBodyRow>
        {/each}
      </TableBody>
    </Table>
    {#if $$slots.cta}<div class="mt-4 xl:mt-6"><slot name="cta"/></div>{/if}
  </Container>
</section>