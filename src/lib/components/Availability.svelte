<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
	import Container from '$lib/components/Container.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

  export let units = [];
  export let title = "Aanbod";
  const sqm = '&#13217;';

  const dispatch = createEventDispatcher();
  const downloadFile = (e) => {
    dispatch('downloadFile', {
      file: e.currentTarget.dataset.file,
      filetype: "plan"
    })
  };
</script>



<section class="content mb-12 md:mb-12 xl:mb-24" id="{$$props.id || null}">
  <Container>
    <h2><strong>{title}</strong></h2>
    <Table divClass="dark">
      <TableHead theadClass="tableHead">
        <TableHeadCell>Ref.</TableHeadCell>
        <TableHeadCell class="hidden sm:table-cell">Verdiep</TableHeadCell>
        <TableHeadCell>Aantal slpk</TableHeadCell>
        <TableHeadCell>Tot. opp.</TableHeadCell>
        <TableHeadCell>Terras / tuin</TableHeadCell>
        <TableHeadCell class="hidden sm:table-cell">Beschikbaarheid</TableHeadCell>
        <TableHeadCell>
          <span class="sr-only">Download</span>
        </TableHeadCell>
      </TableHead>
      <TableBody class="divide-y ">
        {#each units as unit, i}
        <TableBodyRow class="!bg-darkteal dark:border-white">
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">App. {unit.id}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'} hidden sm:table-cell">{unit.floor}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{unit.rooms}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{parseFloat(unit.surfaceGross).toLocaleString('nl-BE', { minimumFractionDigits: 1 })} {@html sqm}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'}">{parseFloat(unit.terraceGarden).toLocaleString('nl-BE', { minimumFractionDigits: 1 })} {@html sqm}</TableBodyCell>
          <TableBodyCell class="{unit.available ? '' : 'dark:!text-teal-04'} hidden sm:table-cell !no-underline">{(unit.available) ? 'beschikbaar' : 'verkocht'}</TableBodyCell>
          <TableBodyCell class="whitespace-nowrap">

            {#if unit.available}
              <button 
                on:click={downloadFile}
                data-file="{unit.id}"
                class="font-medium text-teal hover:underline dark:text-white"
                >
                Download<Icon name="download" size="1em" class="ml-2"/>
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
    {#if $$slots.cta}<div class="mt-8"><slot name="cta"/></div>{/if}
  </Container>
</section>