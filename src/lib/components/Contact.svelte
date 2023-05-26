<script>
	import Container from "./Container.svelte";

  // export let imageLeft = false;
  // export let boxedText = false;

  // slots: title (optional), text (optional)

</script>

<section class="contact mb-12 md:mb-12 xl:mb-24" id="{$$props.id || "contact"}">
  
  {#if $$slots.title || $$slots.text}
  <Container grid>
    <div class="col-span-12 xl:col-span-10 xl:col-start-2 mb-8 md:mb-12 xl:mb-24">
      {#if $$slots.title}<h2 class="font-semibold"><slot name="title"/></h2>{/if}
      {#if $$slots.text}<slot name="text"/>{/if}
    </div>
  </Container>
  {/if}
  
  <Container grid>

    <div class="z-10 row-start-1 self-start col-span-6 col-start-1 lg:pr-4
      bg-gold p-4 md:p-8 xl:p-12 md:mt-24 xl:mt-36
    ">
      <slot name="contactDetails"><p>Contact details placeholder</p></slot>
    </div>
    
    <div class="z-20 row-start-1 col-end-13 order-first col-span-6 p-4 mt-4 md:mt-0 md:p-8 xl:p-12 bg-coolgray text-darkteal">
      <slot name="form"/>
    </div>

    <div class="row-start-1 col-end-13 col-span-8 bg-coolgray"></div>
    
  </Container>

</section>
