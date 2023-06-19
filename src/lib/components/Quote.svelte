<script>
	import Container from "./Container.svelte";
  import { Blockquote } from 'flowbite-svelte'

  export let author;
  export let authorTitle;
</script>

<Container grid class="mb-12 md:mb-12 xl:mb-24">
  <div class="col-span-8 col-start-3 2xl:col-span-6 2xl:col-start-4">
    <figure class="mx-auto max-w-screen-md text-center">
      <!-- <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gold" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg> -->
      <Blockquote alignment="left" size='3xl' baseClass="text-secondary font-light font-serif leading-tight pb-2">
        &OpenCurlyDoubleQuote;<slot/>&CloseCurlyDoubleQuote;
      </Blockquote>
      {#if author}
      <figcaption class="flex justify-center items-center mt-6 space-x-3">
        <!-- <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile"> -->
        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <cite class="pr-3 font-medium text-white dark:text-white">{@html author}</cite>
          {#if authorTitle}<cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{@html authorTitle}</cite>{/if}
        </div>
      </figcaption>
      {/if}
    </figure>
  </div>
</Container>